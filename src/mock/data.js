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
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am Valeriu, a self-taught front end developer from Romania.',
  paragraphTwo:
    'I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest frontend development tools  .',
  paragraphThree:
    'I am comfortable with HTML, CSS, JAVASCRIPT, SASS, BOOTSTRAP, and REACT framework. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'countriesAPI2.png',
    title: 'World Countries API',
    info:
      'This  is a web app which pulls country data from REST Countries API  and displays it in a visually appealing way for the user, according to the design specifications.',
    info2: 'Technologies used to build this app: HTML, CSS,JAVASCRIPT and REACT (REACT-router). ',
    url: 'https://worldcountries-api.netlify.app/',
    repo: 'https://github.com/valy-s/Countries-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crowdfunding.png',
    title: 'Crowdfunding Project',
    info:
      'Crowdfunding project, the users should be able to: see hover states for interactive elements, make a selection of which pledge to make, see an updated progress bar and total money raised based on their pledge total after confirming a pledge, see the number of total backers increment by one after confirming a pledge.',
    info2: 'Technologies used to build this app: HTML, CSS,JAVASCRIPT.',
    url: 'https://crowdfunding-product.netlify.app/',
    repo: 'https://github.com/valy-s/Crowdfunding-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'joblistings.png',
    title: 'Job listings with filtering',
    info:
      'Application that displays a list of available jobs and can be filtered depending on the categories.',
    info2: 'This website was built with HTML, CSS,JAVASCRIPT.',
    url: 'https://static-job-listings.netlify.app/',
    repo: 'https://github.com/valy-s/Static-Job-Listing', // if no repo, the button will not show up
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
