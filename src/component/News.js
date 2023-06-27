import React, { useState } from 'react';
import { Tabs, Tab, Typography, Card, CardContent, CardMedia } from '@mui/material';

const News = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setActiveTab(newIndex);
  };

  const newsData = [
    {
      title: 'New Character Announcement: Kirara',
      description:
        'Acourier for Komaniya Express, a delivery company in Inazuma. A nekomata who loves her jobs and human society',
      image: 'picture/pic/2.jpg',
    },
    
    {
      title: 'Current Event: Duel! The Summoners’ Summit!',
      description:
        'During the event, four types of gameplay will unlock in sequence: A Tour of Wonders, Zero Hour Invokation, Evermotion Mechanical Painting: Invoker, and Heart of the Dice.',
      image: 'picture/pic/5.jpg',
    },
    {
      title: '3.8 Update Released',
      description:
        'Genshin Impact 3.8 will release on Wednesday 5th July. It should follow the usual maintenance schedule for new updates, with 3.8 releasing at 4am (BST).',
      image: 'picture/pic/1.jpg',
    },
  ];

  return (
    <div className="container" style={{marginBottom:'50px'}}>
      <Typography variant="h2" component="h2">
        News
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {newsData.map((news, index) => (
          <Tab
            key={index}
            label={news.title}
            className={activeTab === index ? 'active' : ''}
          />
        ))}
      </Tabs>

      <div className="tab-content">
        {newsData.map((news, index) => (
          <Card
            key={index}
            style={{ display: activeTab === index ? 'block' : 'none' }}
          >
            <CardMedia
              component="img"
              height="400px"
              width="100%"
              image={news.image}
              alt=""
              style={{ objectFit: 'contain' }} // Add CSS style to control image display
            />
            <CardContent>
              <Typography variant="h4" component="h4">
                {news.title}
              </Typography>
              <Typography variant="h5" component="h5">
                {news.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
