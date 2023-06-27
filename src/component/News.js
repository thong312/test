import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';


const newsData = [
  {
    title: 'New Character Announcement',
    date: 'June 25, 2023',
    content: 'Introducing a powerful new character coming to Genshin Impact!',
  },
  {
    title: 'In-Game Event: Summer Festival',
    date: 'July 3, 2023',
    content: 'Join the Summer Festival in Genshin Impact and unlock exclusive rewards!',
  },
  {
    title: 'Version 2.1 Update Released',
    date: 'August 12, 2023',
    content: 'Experience new quests, areas, and features in the latest game update.',
  },
  {
    title: 'Version 2.1 Update Released',
    date: 'August 12, 2023',
    content: 'Experience new quests, areas, and features in the latest game update.',
  },
  {
    title: 'Version 2.1 Update Released',
    date: 'August 12, 2023',
    content: 'Experience new quests, areas, and features in the latest game update.',
  },
  {
    title: 'Version 2.1 Update Released',
    date: 'August 12, 2023',
    content: 'Experience new quests, areas, and features in the latest game update.',
  },
];

const News = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
         News
      </Typography>
      <Grid container spacing={2}>
        {newsData.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {news.date}
                </Typography>
                <Typography variant="body1">{news.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
