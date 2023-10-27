import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  threejs,
  starbucks,
  meta,
  tesla,
} from "../assets";
import bookinterview from "../assets/bookinterview.png";
import courseStudy from "../assets/courseStudy.png";
import payment from "../assets/payment.png";
import sample from "../assets/sample.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Front End Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Rex power magnetics",
    icon: tesla,
    iconBg: "#383E56",
    date: "Oct 2022- Current",
    points: [
      "Spearheaded the development of an Inventory Management System, leveraging Spring Boot and React.js, adeptly serving a diverse user base of over 300 internal users. Ensured the robust and secure storage of critical data by orchestrating MySQL and MongoDB database integration.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Specific projects such as the GitHub merging and Front-end pages implement from figma, improvement evaluation \n" +
        "and code reviewing, with launching and deployment of SDLC and AWS etc",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Lighthouse labs",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Created an e-commerce platform SPA by using React, React-Redux, Redux-Form, with (Express & NodeJS) as REST \n" +
        "API backend to talk to database (MySQL) followed responsive and mobile first rules to design layout and components \n" +
        "data driven dynamic applications for rendering full accessible user interfaces",
      "Created various components and using React Hook and universal store using Redux.\n",
      "Implemented the RBAC (Role based access control), supported role and permission assignment and access.\n",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scheduler",
    description:
      "Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built by utilizing React built-in and custom hooks to allow users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. In terms of testing, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Jest",
        color: "red-text-gradient",
      },
      {
        name: "Cypress",
        color: "orange-text-gradient",
      },
    ],
    image: bookinterview,
    source_code_link: "https://github.com/wesleyweitianqi/scheduler",
  },
  {
    name: "courseProject ",
    description:
      "The Course Project is a Single Page Application (SPA) designed for course recommendation on Udemy for beginners. The project utilizes Vue3 and Element-plus UI, styled using Less to provide a user-friendly experience. The project also provides functionalities such as login, edit, delete, search and category reordering. The data is persisted by running Docker on an EC2 instance using a MYSQL image. The client-side communicates with the server over HTTP with JWT authentication, while the frontend uses Element UI's built-in form validation, and the backend uses JOI for data validation.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "AWS EC2 S3",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "red-text-gradient",
      },
    ],
    image: courseStudy,
    source_code_link: "https://github.com/wesleyweitianqi/courseProject",
  },
  // {
  //   name: "",
  //   description:
  //     "",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "react",
  //       color: "red-text-gradient",
  //     },
  //     {
  //       name: "Vue.js",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "",
  // },
  {
    name: "Jungle",
    description:
      "Create a dynamic e-commerce platform using Ruby on Rails 6.1 with robust features, including secure payment processing through the Stripe API. The application leverages PostgreSQL for efficient database management and adopts server-side rendering (SSR) for improved user experience. Shop for your favorite products seamlessly with our user-friendly interface.",
    tags: [
      {
        name: "Ruby on rails",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "red-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/wesleyweitianqi/Jungle",
  },
];

export { services, technologies, experiences, testimonials, projects };
