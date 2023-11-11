import {
  mobile,
  backend,
  web,
  javascript,
  apex,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  sql,
  threejs,
  salesforce,
  git,
  laravel,
  tms,
  ict,
  ids,
  goto,
  jne,
  telin,
  kejarid,
  pasar,
  bkk,
  kaang,
  food,
  sarlim,
  da,
  kurma,
  dkr
} from "../assets";

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
    title: "Salesforce Developer",
    icon: web,
  },
  {
    title: "Software Quality Assurance",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
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
    name: "Apex",
    icon: apex,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Laravel",
    icon: threejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [

  {
    title: "Salesforce Technical",
    company_name: "TMS Consulting",
    icon: tms,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sept 2023",
    points: [
      "Collaborate on the integration of Salesforce with external systems to ensure seamless connectivity.",
      "Developed API contracts for clients to facilitate the utilization of Salesforce APIs.",
      "Executing deployments from the sandbox organization to the production environment to enable utilization by end-users.",
      "Collaborating with cross-functional teams including project managers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Front End Developer - Internship",
    company_name: "ICT Help",
    icon: ict,
    iconBg: "#383E56",
    date: "Aug 2021 - Nov 2021",
    points: [
      "Manage website development projects from initial designthrough completion, optimizing all cross-browser and multi-platform compatibility.",
      "Created and implemented enhancements that improved web functionality and responsiveness(Using framework flutter).",
      "Participated in each step of the product development processfrom",
    ],
  },
  {
    title: "Web Developer - Internship",
    company_name: "CV IDS Pendidikan Indonesia",
    icon: ids,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Mar 2021",
    points: [
      "Created and implemented enhancements that improved web functionality and responsiveness(Using framework Laravel and Bootstrap).",
      "Worked with another developer to implement RESTful APIs using database MYSQL and Postman for testing).",
      "Participating in code reviews and providing constructive feedback to mentor.",
    ],
  },
];

const projects = [
  {
    name: "Goto Sales Cloud",
    description:
    "Salesforce Sales Cloud is a customer relationship management (CRM) platform designed to support sales, marketing and customer support in both business-to-business (B2B) and business-to-customer (B2C) contexts.",
    tags: [
      {
        name: "salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "apex",
        color: "green-text-gradient",
      },
      {
        name: "aura-js",
        color: "pink-text-gradient",
      },
    ],
    image: goto,
    source_code_link: "https://test.salesforce.com/",
  },
  {
    name: "JNE Service Cloud",
    description:
      "Service Cloud is a customer service platform that helps businesses manage and resolve customer inquiries and issues. It provides tools for case management, knowledge base, omni-channel support, automation, and analytics, enabling companies to deliver exceptional customer service experiences.",
    tags: [
      {
        name: "salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "apex",
        color: "green-text-gradient",
      },
      {
        name: "aura-js",
        color: "pink-text-gradient",
      },
    ],
    image: jne,
    source_code_link: "https://test.salesforce.com/",
  },
  {
    name: "Telin Service Cloud",
    description:
      "Service Cloud is a customer service platform that helps businesses manage and resolve customer inquiries and issues. It provides tools for case management, knowledge base, omni-channel support, automation, and analytics, enabling companies to deliver exceptional customer service experiences.",
    tags: [
      {
        name: "salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "apex",
        color: "green-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
    ],
    image: telin,
    source_code_link: "https://test.salesforce.com/",
  },
  {
    name: "Kejar.id",
    description:
      "Helping schools provide quality education Kejar.id provides learning content, learning management systems (LMS), and educational information systems for schools with a complete, measurable, and monitored philosophy.",
    tags: [
      {
        name: "laravel",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: kejarid,
    source_code_link: "https://kejar.id/",
  },
  {
    name: "Pasar Negeri",
    description:
      "PasarNegeri is Online Market Buying kitchen necessities from traditional markets has become easier. Vegetables, Fruit, Meat, Fish, Onions, Spices, Chilies etc. throughout Jabodetabek.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
    ],
    image: pasar,
    source_code_link: "https://pasar-negeri.web.app/",
  },
  {
    name: "SIM BKK",
    description:
      "SIM BKK is Career data collection platform for SMK Wikrama Bogor alumni students to connect with companies who are looking for employee candidates to work with their company.",
    tags: [
      {
        name: "salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "apex",
        color: "green-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
    ],
    image: bkk,
    source_code_link: "https://github.com/RPL-Wikrama-Bogor/sim-bkk",
  },
  {
    name: "Ikhsan Campaign",
    description:
      "Ikhsan Campaign is a website that is useful for voicing one's campaign or branding oneself in the election for chairman of the 2022 learning camp class.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
    ],
    image: kaang,
    source_code_link: "https://github.com/AhmadIkhsanMaulana/ikhsankaang-lc/",
  },
  {
    name: "Sarlim Digital",
    description:
      "Sarlim provides various online reading needs for visitors. We offer various types of reading books that can be accessed on this website.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: sarlim,
    source_code_link: "https://github.com/mlutfiazizan13/sarlim.github.io/",
  },
  {
    name: "Team Food",
    description:
      "Team Food is a website that provides explanations of all Indonesian food and drinks in Indonesia.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html - css",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/AhmadIkhsanMaulana",
  },
];

const organizations = [

  {
    title: "Secretary",
    organization_name: "Dewan Ambalan SMK Wikrama Bogor",
    icon: da,
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Manage administration and create or recap letters for organizational necessity",
    ],
  },
  {
    title: "Discipline Commision",
    organization_name: "Islam Spritual Organization (KURMA)",
    icon: kurma,
    iconBg: "#383E56",
    date: "January 2020 - June 2022",
    points: [
      "Organize and apply discipline to members of the date palm so that what is done can go well",
    ],
  },
  {
    title: "Research and Evaluation",
    organization_name: "Dewan Kerja Ranting East Bogor",
    icon: dkr,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Mar 2021",
    points: [
      "Research and Evaluate all activites held by the East Bogor DKR Which have been completed so that they will be better in the future",
      "Become the second presidium in the plenary session of the East Bogor Branch 2021",
    ],
  },
];

export { services, technologies, experiences, projects, organizations };
