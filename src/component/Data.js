import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function Data() {
    const [APIData, setAPIData] = useState([]);
    const baseURL = 'https://64901c9c1e6aa71680ca9a2f.mockapi.io/Players'; // Replace with your API base URL

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
            setAPIData(data);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className='Data'>
            <Grid container spacing={2}>
                {APIData.map((data) => (
                    <Grid item key={data.id} md={4}>
                        <Card>
                            <CardMedia component="img" height="240" image={data.img} alt={data.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data.club}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{data.nation}</Button>
                                <Button size="small">Detail</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Link to={`/add`}>ADD</Link>
        </div>
    )
}
export default Data;