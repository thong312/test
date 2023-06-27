import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Container, Card, CardContent, CardMedia, Modal, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DetailPage() {
  const [playerData, setPlayerData] = useState(null);
  const [isClipOpen, setIsClipOpen] = useState(false);
  const { id } = useParams();
  const baseURL = `https://64901c9c1e6aa71680ca9a2f.mockapi.io/Players/${id}`; // Replace with your API endpoint for individual player detail

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error(`HTTP Status: ${response.status}`);
      }
      const data = await response.json();
      setPlayerData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClipOpen = () => {
    setIsClipOpen(true);
  };

  const handleClipClose = () => {
    setIsClipOpen(false);
  };

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Card>
        <CardMedia component="img" height="400" image={playerData.img} alt={playerData.name} />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {playerData.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Age: {playerData.age}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Nation: {playerData.club}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Info: {playerData.info}
          </Typography>
          <Button variant="outlined" onClick={handleClipOpen}>Open Clip</Button>
         
        </CardContent>
      </Card>

      <Modal open={isClipOpen} onClose={handleClipClose}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
        }}>
          <CloseIcon
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: '9999',
              color: 'white',
              cursor: 'pointer',
              fontSize: '42px',
            }}
            onClick={handleClipClose}
          />
          <iframe
            width="50%"
            height="400px"
            src={playerData.clip}
            title={playerData.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
      <Button variant="outlined" component={Link} to="/" style={{ marginTop: '1rem' }}>Return to Homepage</Button>
    </Container>
  );
}

export default DetailPage;
