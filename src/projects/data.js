import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import calculatorImage from '../assets/projects/calculator.png';
import hotelAppImage from '../assets/projects/hotel-booking-app.png';
import concertImage from '../assets/projects/musicalconcert.png';
import yardCare from '../assets/projects/yard-care.png';
import dura from '../assets/projects/dura.png';
import countryPainters from '../assets/projects/country-painters.png';
import eliteAttire from '../assets/projects/elite-attire.png';

const data = {
  skills: [
    {
      frontend:
        'JavaScript, TypeScript, React, Next JS, Redux, HTML5, CSS, Tailwind CSS, Bootstrap',
    },
    {
      backend:
        'Node JS, Express JS, Ruby, Ruby on Rails, SQL, Postgresql, MySQL, MongoDB',
    },
    {
      ToolsAndMethods:
        'Git, GitHub, RESTful APIs, GraphQL, WebSockets, SEO, Vite, Webpack, Figma, JWT, Rspec, Jest, Stripe',
    },
  ],
  projects: [
    {
      project_name: 'Elite Attire',
      project_live_link: 'https://elite-attire.onrender.com/',
      project_description:
        "Elite Attire is your cutting-edge gateway to premier men's footwear. Crafted with Node.js, Express.js, MongoDB, and styled with CSS, my app revolutionizes the shoe shopping experience. Designed for utmost convenience, it brings the latest trends from elite brands like Adidas, Nike, Converse, and more directly to your fingertips.",
      project_image: eliteAttire,
      project_tech: 'Express JS, MongoDB, CSS',
      project_link: 'https://github.com/Amen-Musingarimi/elite-attire',
    },
    {
      project_name: 'Yard Care',
      project_live_link: 'https://yard-care.netlify.app/',
      project_description:
        'Yard Care is a cutting-edge platform that brings the convenience of real-time yard service viewing and booking right to your fingertips. Designed to make yard care hassle-free and efficient, this app offers a seamless experience for users to explore a variety of yard services and schedule their preferred services instantly.',
      project_image: yardCare,
      project_tech: 'CSS, React, Jest-test',
      project_link: 'https://github.com/Amen-Musingarimi/yard-care.git',
    },
    {
      project_name: 'Dura | The Zim Flavors Hub',
      project_live_link: 'https://dura-zim.netlify.app/',
      project_description:
        'Dura is an app that empowers users to explore and purchase authentic Zimbabwean traditional foods, creating a bridge to cultural heritage. It offers a seamless and user-friendly experience, connecting food enthusiasts with the flavors of Zimbabwe.',
      project_image: dura,
      project_tech: 'JavaScript, React, Redux, CSS, Ruby on Rails, PostgreSQL',
      project_link: 'https://github.com/Amen-Musingarimi/dura-frontend.git',
    },
    {
      project_name: 'Country Painters & Glazers',
      project_live_link: 'https://country-painters.netlify.app/',
      project_description:
        'Country Painters & Glazers presents a modern online presence designed to streamline your experience in the world of home improvement. Our website offers a user-friendly platform for discovering and scheduling top-quality painting, glazing, and tiling services. Explore our services effortlessly, and transform your living spaces with ease.',
      project_image: countryPainters,
      project_tech: 'CSS, React, Redux, Jest-test',
      project_link: 'https://github.com/Amen-Musingarimi/country-painters.git',
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
