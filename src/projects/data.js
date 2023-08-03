import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HiOutlineMail } from 'react-icons/hi';
import TwitterIcon from '@mui/icons-material/Twitter';
import calculatorImage from '../assets/projects/calculator.png';
import hotelAppImage from '../assets/projects/hotel-booking-app.png';
import concertImage from '../assets/projects/musicalconcert.png';
import recipeImage from '../assets/projects/recipeapp.png';
import spaceTravelersImage from '../assets/projects/spacetravelers.png';

const data = {
  skills: [
    { name: 'JavaScript(ES6+)' },
    { name: 'ReactJs' },
    { name: 'Redux' },
    { name: 'SQL' },
    { name: 'Ruby' },
    { name: 'Ruby on Rails' },
  ],
  projects: [
    {
      project_name: 'Math Magicians',
      project_live_link: '#',
      project_description:
        'a web app that allows users to make simple math calculations and read a random math-related quotes.',
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
      project_link: 'https://github.com/Amen-Musingarimi/recipe-app-rails.git',
    },
    {
      project_name: 'Space Travelers',
      project_live_link: 'https://space-travellers-hub-325d.onrender.com/',
      project_description:
        'This web app focuses on a company that offers both commercial and scientific space travel services. Through this web application, users will have the opportunity to book rockets and participate in various space missions of their choice.',
      project_image: spaceTravelersImage,
      project_tech: 'HTML5, CSS, React, Redux, Jest-test',
      project_link:
        'https://github.com/Amen-Musingarimi/space-travelers-hub.git',
    },
    {
      project_name: 'Recipe App',
      project_live_link: '#',
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
    { name: <HiOutlineMail />, link: 'takudzwamusinga@gmail.com' },
    { name: <TwitterIcon />, link: 'https://twitter.com/MusingarimiT' },
  ],
};

export default data;
