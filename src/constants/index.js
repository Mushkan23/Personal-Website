import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `A B.Tech IT graduate with a passion for crafting robust and scalable web applications. I have honed my skills in MERN Stack Technologies. I love exploring AI, Web Designing, continuously expanding my skill set. I Write tech blogs and sharing my learning journey to engaged with the developer community. I enjoy solving real-world problems through code and working on challenging projects. Currently, I’m preparing for exciting career opportunities in tech.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have Studied a variety of technologies, including React, Node.js and MongoDB. My journey in web development began with a creativity for how things work and looks, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Feb 2023 - May 2023",
    role: "Application Developer Intern",
    company: "Meril Life Sciences",
    description: `Developed a dynamic blog page with user authentication using Python and MongoDB. Contributed to feature enhancement in existing software products by collaborating with senior developers. Gained hands-on experience in Zoho Software and enterprise-level software development.`,
    technologies: ["Python", "MongoDB", "Flask"],
  },
  {
    year: "June 2022 - July 2022",
    role: "Frontend Developer",
    company: "FutureWise Technologies",
    description: `Developed multiple frontend projects, including a Tic-Tac-Toe game and a To-Do list using JavaScript and Local
Storage. Built a fully responsive e-commerce website with real-time data updates, enhancing the UI with HTML, CSS, and
JavaScript. Built a fully responsive e-commerce website with real-time data updates, enhancing the UI with HTML, CSS, and
JavaScript.`,
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
];

export const PROJECTS = [
  {
    title: "Hirred",
    image: project1,
    description:
      "Developed a fully functional job portal where users can post and find jobs seamlessly. Integrated Clerk authentication for secure user login and role-based access control.Ensured user data protection using Supabase with security best practices. Implemented a responsive UI/UX using TailwindCSS ShadCN UI, enhancing user experience. Designed an intuitive dashboard for job seekers and employers, allowing smooth job applications and postings.",
    technologies: ["React.js", "TailwindCSS", "ShadCN UI", "Clerk", "Supabase"],
  },
  {
    title: "Digital Marketing Landing Page",
    image: project2,
    description:
      "A responsive and visually appealing digital marketing landing page built using React and Tailwind CSS. This project showcases modern UI/UX design, featuring a clean layout, engaging call-to-action sections, and smooth animations. It is optimized for performance and responsiveness, making it an ideal template for marketing agencies or businesses looking to create an online presence.",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A sleek and modern portfolio website built using React, Tailwind CSS, and Framer Motion for smooth animations. This project highlights personal projects, skills, and experiences with an interactive and responsive design. It features dynamic transitions, a clean UI, and an engaging layout to create a strong online presence.",
    technologies: ["React.js", "TailwindCSS", "Framer"],
  },
  {
    title: "Blog App with Dashboard (Ongoing)",
    image: project4,
    description:"A full-stack blog app with an admin dashboard, built using MERN, Redux Toolkit, and Tailwind CSS. It features JWT & Google OAuth authentication, CRUD operations, dark mode, and advanced search. The project focuses on problem-solving in authentication, state management, and database queries while ensuring responsive design and a seamless user experience. Deployed on Render for easy access.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Reduc Toolkit", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "Khariwad, Daman",
  phoneNo: "9662399383",
  email: "mushkansingh733@gmail.com",
};
