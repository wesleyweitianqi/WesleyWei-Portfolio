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
    carrent,
    jobit,
    tripguide,
    threejs, starbucks, meta, tesla,
} from "../assets";
import sample from '../assets/sample.png'
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
        title: "TypeScript Developer",
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
        company_name: "MentorX",
        icon: tesla,
        iconBg: "#383E56",
        date: "Jun 2021 - Sep 2021",
        points: [
            "Created an online learning e-commerce platform SPA by using React, React-Redux, Next.js with various components\n" +
            "and using React Hook and universal store using Redux, algorithm simulation and realization based on Next.js and \n" +
            "React.js with multiple components.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Specific projects such as the GitHub merging and Front-end pages implement from figma, improvement evaluation \n" +
            "and code reviewing, with launching and deployment of SDLC and AWS etc"
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Mark2Win",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Sep 2021 - Sep 2022",
        points: [
            "Created an e-commerce platform SPA by using React, React-Redux, Redux-Form, with (Express & NodeJS) as REST \n" +
            "API backend to talk to database (MySQL) followed responsive and mobile first rules to design layout and components \n" +
            "data driven dynamic applications for rendering full accessible user interfaces",
            "Created various components and using React Hook and universal store using Redux.\n",
            "Implemented the RBAC (Role based access control), supported role and permission assignment and access.\n",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "JavaScript Developer",
        company_name: "LearnFormula.Inc",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Dec 2022 - March 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Migrated the whole system from VueJs to ReactJs Using NextAuth and Next Documentation Vercel",
            "Created the e-commerce Online courses platform SPA by using Next13, Nuxt2, with (ReactJs, VueJs framework) \n" +
            "and Laravel and PHP, as REST API backend to talk to database (MySQL) following responsive and mobile first\n" +
            "rules to design layout and components with Bootstrap5 from Figma",
            "Developed the Login and Register Pages, etc. and All Landing Pages as Custom-packages with data driven dynamic\n" +
            "applications for rendering full accessible user interfaces"
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
        name: "City View",
        description:
            "Web-based platform that allows users to search, change, and manage city views from various providers, providing a convenient and background of images.",
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
        ],
        image: carrent,
        source_code_link: "https://github.com/abpoooo/CityView_Different_Page",
    },
    {
        name: "LuLu Lemon clone ",
        description:
            "A LuLuLemon Clone using React, Redux and Node.js for the backend,Developed data driven dynamic applications for rendering full accessible user interfaces\n" +
            "Followed responsive and mobile first rules to design layout and components\n" +
            "Implemented the global filters in both Front-end UI and backend logics\n .",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "redux",
                color: "red-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/abpoooo/Lululemon_Final/",
    },
    {
        name: "Custom-Package Landing Page for LearnFormula",
        description:
            "Created the e-commerce Online courses platform SPA by using Next13, Nuxt2, with (ReactJs, VueJs framework) \n" +
            "and Laravel and PHP, as REST API backend to talk to database (MySQL) following responsive and mobile first\n" +
            "rules to design layout and components with Bootstrap5 from Figma as a custom-package landing page for CPD Formula.",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "react",
                color: "red-text-gradient",
            },
            {
                name: "Vue.js",
                color: "orange-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://cpdformula.com/custom-package?hours=20/",
    },
    {
        name: "DashBoard Project",
        description:
            "Created the DashBoard platform SPA by using React, Syncfusion and tailwind to display a dashboard for graphs \n" +
            "and displaying customers employees budgets and income charts in different ways with responsive design.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "red-text-gradient",
            },
            {
                name: "syncfusion",
                color: "orange-text-gradient",
            },
        ],
        image: sample,
        source_code_link: "https://github.com/abpoooo/dashborad_project/",
    },
];

export { services, technologies, experiences, testimonials, projects };