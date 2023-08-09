import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import data from '../projects/data';
import Form from '../components/Form';

const Contact = () => {
  const styles = {
    social: {
      color: '#8892af',
    },
    footText: {
      color: '#8892af',
      fontSize: 12,
    },
    floatEmail: {
      color: '#8892af',
    },
  };
  return (
    <Container id="contact" sx={{ px: { xs: 6, sm: 7, xl: 0 }, pl: { xl: 0 } }}>
      <Typography
        variant="body1"
        component="h6"
        sx={{ color: '#64ffda', textAlign: 'center' }}
      >
        <Typography variant="span">04.</Typography>
        What&apos;s Next?
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'sans-serif',
          fontWeight: 800,
          my: 2,
          textAlign: 'center',
          mb: { md: '3rem' },
        }}
      >
        Get In Touch
      </Typography>

      <Grid container sx={{ display: { xxs: 'block', md: 'flex' } }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: 'center',
            m: 'auto',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'sans-serif',
              fontWeight: 300,
              textAlign: 'left',
              color: '#8892af',
              m: 'auto',
              mr: { mmd: 3 },
              ml: { '2xl': 7 },
            }}
          >
            Hello! I&apos;m actively seeking new opportunities as a full-stack
            developer. I&apos;m open to remote or onsite positions, and I&apos;m
            flexible with both full-time and part-time roles. If you have any
            exciting job opportunities or projects that you believe would be a
            good fit, please don&apos;t hesitate to reach out to me. I&apos;m
            eager to connect with potential employers and collaborators and look
            forward to exploring exciting new prospects together.
          </Typography>

          <Link to="https://www.linkedin.com/in/atmusingarimi/" target="_blank">
            <Button
              className="btn"
              sx={{
                py: { xxs: 1.8 },
                px: { xxs: 7 },
                mt: { xxs: 3, md: 8 },
                mb: 5,
                display: { xxs: 'inline', md: 'none' },
              }}
            >
              Say Hello
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            color: '#8892af',
            textAlign: 'center',
          }}
        >
          <Form />
        </Grid>
      </Grid>

      <footer>
        <List
          sx={{
            width: 'fit-content',
            m: 'auto',
            display: { xxs: 'flex', md: 'block' },
            position: { md: 'fixed' },
            left: { md: 10, xl: 57 },
            bottom: { md: 90 },
            zIndex: { md: 99 },
          }}
          className="social-float"
        >
          {data.socials.map((icon) => (
            <ListItem key={icon.name} sx={{ px: 1.2 }}>
              <Link
                to={icon.link}
                style={styles.social}
                className="social-icon"
                key={icon.name}
                target="_blank"
              >
                {icon.name}
              </Link>
            </ListItem>
          ))}
          <ListItem
            sx={{
              position: { md: 'fixed' },
              right: { md: -100, xl: -57 },
              bottom: { md: 181 },
              width: { md: 'auto' },
              transform: { md: 'rotate(90deg)' },
              display: { xxs: 'none', md: 'block' },
            }}
          >
            <Link
              to="mailto:takudzwamusinga@gmail.com"
              target="_blank"
              className="floatEmail"
              style={styles.floatEmail}
            >
              takudzwamusinga@gmail.com
            </Link>
            <Divider orientation="vertical" />
          </ListItem>
        </List>

        <Box sx={{ mx: 5, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#64ffda' }}>
            <Link
              to="https://github.com/Amen-Musingarimi"
              target="_blank"
              className="footText"
              style={styles.footText}
            >
              Crafted and Engineered by Amen Musingarimi - Software Developer
              Extraordinaire!
            </Link>
          </Typography>
          <Typography
            variant="span"
            className="card-icon"
            sx={{ fontWeight: 300, fontSize: 14, mr: 2 }}
          >
            <StarOutlineIcon sx={{ fontSize: 16, mx: 0.5 }} />
            62
          </Typography>
          <Typography
            variant="span"
            className="card-icon"
            sx={{ fontWeight: 300, fontSize: 14 }}
          >
            <ForkRightIcon sx={{ fontSize: 16, mx: 0.5 }} />
            11
          </Typography>
        </Box>
      </footer>
    </Container>
  );
};

export default Contact;
