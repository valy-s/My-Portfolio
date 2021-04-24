import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Valeriu Web Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Valeriu',
  subtitle: 'I am a self taught front end developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am Valeriu, a self-taught front end developer from Romania.',
  paragraphTwo: 'I started learning web developement over a year ago following tutorials online.',
  paragraphThree: 'I am comfortable with HTML, CSS, JAVASCRIPT and REACT framework. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'countriesAPI2.png',
    title: 'World Countries API',
    info: ' This website was built with HTML, CSS,JAVASCRIPT and REACT (REACT-router)',
    info2: '',
    url: 'https://worldcountries-api.netlify.app/',
    repo: 'https://github.com/valy-s/Countries-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crowdfunding.png',
    title: 'Crowdfunding Project',
    info: 'This website was built with HTML, CSS,JAVASCRIPT.',
    info2: '',
    url: 'https://crowdfunding-product.netlify.app/',
    repo: 'https://github.com/valy-s/Crowdfunding-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blogger.png',
    title: 'Blogr Landing Page',
    info: 'This website was built with HTML, CSS,JAVASCRIPT.',
    info2: '',
    url: 'https://bloggrs.netlify.app/',
    repo: 'https://github.com/valy-s/blogr-landing-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'My portofolio',
    info: 'This website was built with GATSBY template.',
    info2: 'This is this website you are browsing right now.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'valeriu.stanculescu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/valeriu-stanculescu-21b038123/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/valy-s',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
