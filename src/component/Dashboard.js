import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, TextField, Button } from '@mui/material';

function Dashboard() {
  const [data, setData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [updatedPlayer, setUpdatedPlayer] = useState({
    id: '',
    name: '',
    club: '',
    img: '',
    clip: '',
    age: '',
    nation: '',
    info: '',
  });
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);

  const baseURL = 'https://64901c9c1e6aa71680ca9a2f.mockapi.io/Players';

  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`${baseURL}/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch(error => console.log(error));
  };

  const handleUpdate = (player) => {
    setSelectedPlayer(player);
    setUpdatedPlayer({
      id: player.id,
      name: player.name,
      club: player.club,
      img: player.img,
      clip: player.clip,
      age: player.age,
      nation: player.nation,
      info: player.info,
    });
  };

  const handleInputChange = (e) => {
    setUpdatedPlayer({
      ...updatedPlayer,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    fetch(`${baseURL}/${selectedPlayer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPlayer)
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === selectedPlayer.id) {
            return {
              id: item.id,
              name: updatedPlayer.name,
              club: updatedPlayer.club,
              img: updatedPlayer.img,
              clip: updatedPlayer.clip,
              age: updatedPlayer.age,
              nation: updatedPlayer.nation,
              info: updatedPlayer.info
            };
          }
          return item;
        });

        setData(updatedData);
        setSelectedPlayer(null);
        setUpdatedPlayer({
          id: '',
          name: '',
          club: '',
          img: '',
          clip: '',
          age: '',
          nation: '',
          info: ''
        });
        setIsUpdateSuccessful(true);
        setTimeout(() => {
          setIsUpdateSuccessful(false);
        }, 2000);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='container' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Age</th>
            <th>Nation</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </td>
              <td>{item.age}</td>
              <td>{item.club}</td>
              <td>
                <DeleteIcon onClick={() => handleDelete(item.id)}>Delete</DeleteIcon>
              </td>
              <td>
                <EditIcon onClick={() => handleUpdate(item)}>Update</EditIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPlayer && (
        <div>
          <h2>Update Player</h2>
          <form onSubmit={handleUpdateSubmit} className="update-form">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="ID"
                  name="id"
                  value={updatedPlayer.id}
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={updatedPlayer.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nation"
                  name="club"
                  value={updatedPlayer.club}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image"
                  name="img"
                  value={updatedPlayer.img}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Clip"
                  name="clip"
                  value={updatedPlayer.clip}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  value={updatedPlayer.age}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Game"
                  name="nation"
                  value={updatedPlayer.nation}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Info"
                  name="info"
                  value={updatedPlayer.info}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" className="update-button">
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      )}

      {isUpdateSuccessful && (
        <div style={{ marginTop: '10px', color: 'green' }}>Update successful!</div>
      )}
    </div>
  );
}

export default Dashboard;
