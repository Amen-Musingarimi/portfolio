import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import calculatorImage from '../assets/projects/calculator.png';
import hotelAppImage from '../assets/projects/hotel-booking-app.png';
import concertImage from '../assets/projects/musicalconcert.png';
import recipeImage from '../assets/projects/recipeapp.png';
import yardCare from '../assets/projects/yard-care.png';

const data = {
  skills: [
    {
      frontend:
        'JavaScript, React, Redux, Next.js, jQuery, HTML5, CSS, Bootstrap, Sass',
    },
    { backend: ' Ruby, Ruby on Rails, PostgreSQL' },
    {
      ToolsAndMethods:
        'Git, GitHub, Vite, Webpack, RESTful APIs, Chrome DevTools, Figma, Jira',
    },
  ],
  projects: [
    {
      project_name: 'Yard Care',
      project_live_link: 'https://yard-care.netlify.app/',
      project_description:
        'Yard Care is a cutting-edge platform that brings the convenience of real-time yard service viewing and booking right to your fingertips. Designed to make yard care hassle-free and efficient, this app offers a seamless experience for users to explore a variety of yard services and schedule their preferred services instantly.',
      project_image: yardCare,
      project_tech: 'HTML5, CSS, React, Redux, Jest-test',
      project_link: 'https://github.com/Amen-Musingarimi/yard-care.git',
    },
    {
      project_name: 'Math Magicians',
      project_live_link: 'https://math-magicians-pi.vercel.app/calculator',
      project_description:
        'A web app that allows users to make simple math calculations and read a random math-related quotes.',
      project_image: calculatorImage,
      project_tech: 'HTML, CSS, JavaScript',
      project_link: 'https://github.com/Amen-Musingarimi/Math-Magicians.git',
    },
    {
      project_name: 'Hotel Booking',
      project_live_link: 'https://hotel-booking-now.onrender.com/',
      project_description:
        'A platform that allows users to discover the best hotels around the world and book their dream vacations effortlessly. Unlock exclusive deals and offers by signing up or logging in, and experience seamless navigation and responsive design for an exceptional user experience',
      project_image: hotelAppImage,
      project_tech: 'React, Redux, Ruby On Rails, PostgreSQL, CSS',
      project_link:
        'https://github.com/Amen-Musingarimi/hotel-booking-app-backend.git',
    },
    {
      project_name: 'Recipe App',
      project_live_link: 'https://recipe-hub-15ks.onrender.com',
      project_description:
        'A Ruby on Rails application for managing recipes, ingredients, and inventory. Create, save, and share recipes, generate shopping lists based on inventory, and make recipes public for easy access',
      project_image: recipeImage,
      project_tech: 'Ruby on Rails, Rspec, CSS',
      project_link: 'https://github.com/Amen-Musingarimi/recipe-app-rails.git',
    },
    {
      project_name: 'Musical Concert',
      project_live_link:
        'https://amen-musingarimi.github.io/musical-concert-capstone/',
      project_description:
        'Musical Concert is a website where users can see details about a popular music concert hosted in Victoria Falls, Zimbabwe',
      project_image: concertImage,
      project_tech: 'Javascript, HTML, CSS',
      project_link:
        'https://github.com/Amen-Musingarimi/musical-concert-capstone.git',
    },
  ],
  socials: [
    { name: <GitHubIcon />, link: 'https://github.com/Amen-Musingarimi' },
    {
      name: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/atmusingarimi/',
    },
    { name: <TwitterIcon />, link: 'https://twitter.com/MusingarimiT' },
  ],
};

export default data;
