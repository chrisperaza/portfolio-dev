# Overview

This is a portfolio website designed to showcase my projects, skills, and achievements in software development.

This portfolio is built using **JavaScript** as the primary language and **React** for the frontend to generate web pages dynamically.

For the backend, I used **Node** and **Express** to create the API, and **MongoDB** to set up and manage the database.

Through this project, I demonstrate my skills in developing dynamic web pages and establishing the connection between the frontend and the backend.

**How to install:** Once you have downloaded the project, simply run the following command at the root:

```bash
npm run build
```

**How to run the project locally:**

1 - Go to front_end folder:

```bash
cd front_end
```

2 - Run the following command:

```bash
npm run dev
```

🚀 **Website link:**

[Portfolio Website](https://portfolio-dev-l5fq.onrender.com)

▶️ **Video demo:**

[Portfolio Video Demo](https://youtu.be/3MZY8ECfb38)

## Web Pages

- **Home page:** This is the main page featuring the hero banner, featured projects and other projects, my skills, achievements, and a contact section. Currently, the only link to access this page is the website logo.

- **Projects page:** This page displays a broader range of projects than the home page. In addition to the banner and projects section, it includes a section with a link to my GitHub. It also dynamically renders the achievements and contact sections. Currently, there are two buttons on the home page to access this page: one in the banner labeled "Check out my projects" and another just above the Skills section labeled "Check out more projects."

Both pages share the following elements, which are dynamically generated as components:

- Header
- Projects section
- About Me section
- Contact Me section
- Footer

## Development Environment

- **React**: to create the application and develop the entire frontend using components
- **Vite**: as a frontend build tool
- **Node and Express**: to run JavaScript programs in the console and develop the CRUD API server
- **npm**: to manage the packages and tools used in the programs
- **MongoDB**: as a cloud database service
- **mongodb**: library to connect and manage the database
- **cors**: to let the API communicates with other websites
- **dotenv**: to load environment variables from .env
- **axios**: to consume the API from the frontend
- **react-router-dom**: for route handling
- **FontAwesome**: for importing modern icons
- **Render**: for deploying the portfolio website
- **Git**: as a version control tool to add and commit changes, maintaining a history of them
- And **JavaScript**: as the primary development language

## Useful Websites

- [React Getting Started](https://www.w3schools.com/react/react_getstarted.asp)
- [Getting Started | Vite](https://vite.dev/guide/)
- [Quick Start - React](https://react.dev/learn)
- [React Props](https://www.w3schools.com/react/react_props.asp)
- [React Router](https://www.w3schools.com/react/react_router.asp)
- [Set Up with React | Font Awesome](https://docs.fontawesome.com/web/use-with/react/)
- [Deploying on Render](https://render.com/docs/deploys)

## Future Work

- Add the correct links to the header navigation

- Create the "Blue Button" component

- Add functionality to download my resume when clicking the "Resume" or "Download Resume" button

- Link the "Let's talk" button in the main banner to my email address

- Edit paragraphs in various sections, as there is repeated content

- Create and update the database for the other projects with accurate information, replacing the current placeholder data

- Improve the "Skills" and "About Me" sections

- Implement the tablet view, as currently only the mobile and desktop views are developed
