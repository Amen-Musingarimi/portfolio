import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import data from '../projects/data';
import profile from '../assets/profile.jpg';

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
          xxs={12}
          md={6}
          sx={{
            color: '#8892af',
            mx: { xs: 4, md: 6 },
          }}
        >
          <div className="heading" style={styles.heading}>
            <Typography variant="h6" sx={{ mr: 2, color: '#ccd6f6' }}>
              <Typography variant="span" sx={{ color: '#64ffda' }}>
                01.{' '}
              </Typography>
              About Me
            </Typography>
            <Divider
              style={styles.hr}
              sx={{ width: { xxs: '30%', xs: '50%' } }}
            />
          </div>
          <Box className="about-content" sx={{ fontFamily: 'sans-serif' }}>
            <Typography
              variant="body1"
              sx={{ mt: 4, fontFamily: 'sans-serif' }}
            >
              Greetings! My name is Amen, and I am a devoted full-stack
              developer who derives pleasure from crafting engaging and
              user-friendly websites. Throughout my journey, I have undertaken
              20+ remarkable projects, both independently and in collaboration
              with others. Each endeavor has served as a thrilling chance to
              enhance my skills and devise inventive solutions.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, fontFamily: 'sans-serif' }}
            >
              Throughout my journey, I've had the privilege of working with
              skilled developers from various backgrounds in remote setups,
              cultivating a strong sense of teamwork that knows no boundaries.
              This valuable experience has not only refined my technical
              proficiency but also enriched my communication and problem-solving
              abilities in multicultural settings.
            </Typography>
            <Typography sx={{ mt: 2, fontFamily: 'sans-serif' }}>
              Demonstrating unwavering commitment to my craft, I have devoted
              over 1500 hours to refining my coding skills, delving into the
              intricacies of web development, and consistently pushing my limits
              as a developer. Throughout my journey in the world of web
              development, I have gained valuable hands-on experience with a
              diverse range of technologies and tools, including:
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Grid container sx={{ mt: 2 }}>
                {data.skills.map((skill, index) => (
                  <Grid
                    item
                    key={index}
                    xxs={6}
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
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            mx: 'auto',
            my: { xxs: 5 },
            width: { xxs: '60%', xs: '40%', sm: '35%', md: '30%' },
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
      </Grid>
    </Container>
  );
};

export default About;
