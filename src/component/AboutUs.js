import React, { useContext } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Group as GroupIcon, Notifications as NotificationsIcon, LocationOn as LocationOnIcon, GroupAdd as GroupAddIcon, Phone as PhoneIcon, Mail as MailIcon, Home as HomeIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export default function About() {

    return (
        <Container>
            <div className='about-container'>
                <div>
                    <Typography variant="h2">About Us</Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <Typography>Our website</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Our website is your go-to destination for all things film. Whether you're a casual moviegoer or a dedicated cinephile, we invite you to immerse yourself in the captivating world of cinema on our platform. Discover new films, revisit old classics, and connect with a community of fellow film enthusiasts. Start exploring today and embark on a cinematic journey like no other!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemIcon>
                                <NotificationsIcon />
                            </ListItemIcon>
                            <Typography>Daily News</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                There are many lists of top movies of all time. One such list is the Top 250 Movies list on IMDb which is ranked by a formula that includes the number of ratings each movie received from users and value of ratings received from regular users1. Another list is 100 Best Movies of All Time by Time Out which is ranked by their film editors2. You can also check out Top 100 Greatest Movies of All Time on IMDb which are ranked according to their success (awards & nominations), popularity, and cinematic greatness from a directing/writing perspective3.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <Typography>Our team</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Designer: Ly Minh Thong" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Content: Ly Minh Thong" />
                                </ListItem>
                            </List>
                        </AccordionDetails>

                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <Typography>Our address</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Miss Davis 73 Apple Road Bournemouth BH8 6BL UK</Typography>
                        </AccordionDetails>

                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemIcon>
                                <GroupAddIcon />
                            </ListItemIcon>
                            <Typography>Recruit</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>If you are interested in creating content on our platform, please contact us:</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Phone: 0123456" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email: FilmsSite@gmail.com" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Post Address: Mr.Minh Thong 123 Main Street Anytown Midshire AB12 3CD United Kingdom" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>



                </div>
            </div>
        </Container>
    );
}
