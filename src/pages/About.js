import {
  Container, Divider, Grid, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import data from '../projects/data';
import profile from '../assets/profile.jpg';
import '../index.css';

const About = () => {
  const styles = {
    heading: {
      display: 'flex',
      alignItems: 'center',
    },
    hr: {
      backgroundColor: '#8892af',
    },
    img: {
      border: '1px solid #64ffda',
      borderRadius: '8px',
      filter: 'saturate(0%)',
    },
  };

  return (
    <Container
      id="about"
      sx={{ mt: { md: '3rem' }, mx: { xl: '6rem' }, ml: { '2xl': '13rem' } }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{
            color: '#8892af',
            mx: { xs: 4, md: 6 },
          }}
        >
          <div className="heading" style={styles.heading}>
            <Typography variant="h6" sx={{ mr: 2, color: '#ccd6f6' }}>
              <Typography variant="span" sx={{ color: '#64ffda' }}>
                01.
                {' '}
              </Typography>
              About Me
            </Typography>
            <Divider
              style={styles.hr}
              sx={{ width: { xxs: '30%', xs: '50%' } }}
            />
          </div>
        </Grid>
        <Box
          xs={12}
          md={6}
          sx={{
            mx: 'auto',
            my: { xxs: 5 },
            width: {
              xxs: '60%',
              xs: '40%',
              sm: '35%',
              md: '30%',
            },
            display: { md: 'flex', alignItems: 'center' },
            mr: { md: 4, xl: 0, '2xl': 0 },
          }}
        >
          <img
            className="img slideanim"
            style={styles.img}
            src={profile}
            width="100%"
            alt="profile"
          />
        </Box>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            color: '#8892af',
            mx: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Box className="about-content" sx={{ fontFamily: 'sans-serif' }}>
            <Typography
              variant="body2"
              sx={{ mt: 2, fontFamily: 'sans-serif', lineHeight: 1.7 }}
            >
              Hello! I&apos;m Amen Musingarimi, a passionate full-stack
              developer dedicated to creating intuitive and user-centric web
              applications. With a rich background encompassing over 20
              impactful projects, I&apos;ve cultivated a knack for innovative
              problem-solving and seamless collaboration.
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: 'sans-serif', lineHeight: 1.7 }}
            >
              Having thrived in diverse remote environments, I&apos;ve honed not
              only my technical skills but also my ability to communicate
              effectively across multicultural teams.
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: 'sans-serif', lineHeight: 1.7 }}
            >
              I am committed to my craft, having spent over 1500 hours refining
              my coding skills and gaining valuable hands-on experience with
              various web development technologies and tools that include:
            </Typography>

            <Box>
              <Box sx={{ mt: 1 }}>
                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      py: '0.2rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontSize: '0.8rem',
                        position: 'relative',
                        bottom: '2px',
                        mr: 1,
                        color: '#64ffda',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      ▹
                    </Typography>
                    <Typography
                      className="skills"
                      variant="body2"
                      sx={{
                        fontSize: '0.9rem',
                        fontFamily: 'sans-serif',
                        fontWeight: '300',
                        color: '#CCD6F6',
                        lineHeight: 1.7,
                      }}
                    >
                      <span className="keyName">Frontend: </span>
                      {data.skills[0].frontend}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      py: '0.2rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontSize: '0.8rem',
                        position: 'relative',
                        bottom: '2px',
                        mr: 1,
                        color: '#64ffda',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      ▹
                    </Typography>
                    <Typography
                      className="skills"
                      variant="body2"
                      sx={{
                        fontSize: '0.9rem',
                        fontFamily: 'sans-serif',
                        fontWeight: '300',
                        color: '#CCD6F6',
                        lineHeight: 1.7,
                      }}
                    >
                      <span className="keyName">Backend: </span>
                      {data.skills[1].backend}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      py: '0.2rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontSize: '0.8rem',
                        position: 'relative',
                        bottom: '2px',
                        mr: 1,
                        color: '#64ffda',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      ▹
                    </Typography>
                    <Typography
                      className="skills"
                      variant="body2"
                      sx={{
                        fontSize: '0.9rem',
                        fontFamily: 'sans-serif',
                        fontWeight: '300',
                        color: '#CCD6F6',
                        lineHeight: 1.7,
                      }}
                    >
                      <span className="keyName">Tools And Methods: </span>
                      {data.skills[2].ToolsAndMethods}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
