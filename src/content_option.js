import one from "./assets/one.png";
import two from "./assets/two.png";
import four from "./assets/Four.png.png";
const logotext = "RAHUL";
const meta = {
    title: "Rahul Chauhan",
    description: "I’m Rahul Chauhan — I build fast, responsive, and scalable Web Experiences using React.js, Python (Flask/FastAPI), and Firebase.",
};

const introdata = {
    title: "I’m Rahul Chauhan",
    animated: {
        first: "Web Developer",
        second: "React.js • Python • Firebase",
        third: "Fast • Responsive • Scalable",
    },
    description: "I build fast, responsive, and scalable Web Experiences using React.js, Python (Flask/FastAPI), and Firebase.",
    your_img_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
};

const dataabout = {
    title: "About Me",
    aboutme: "Web Developer skilled in React.js, Python (Flask/FastAPI), Firebase, and Manual Testing. Completed Internship at Codsoft with focus on performance optimization — achieved 30% faster load time & 95% score on Google PageSpeed Insights. Strong understanding of SDLC, STLC, and writing functional test cases. Passionate about clean UI and scalable backend solutions.",
};
const worktimeline = [
    {
        jobtitle: "Web Development Intern",
        where: "Codsoft",
        date: "Performance optimized frontend: −30% load time, 95% PageSpeed",
    },
];

const skills = [
    { name: "React.js", value: 90 },
    { name: "Python (Flask/FastAPI)", value: 85 },
    { name: "Firebase", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "Node.js", value: 75 },
    { name: "MongoDB", value: 70 },
    { name: "SQL", value: 80 },
    { name: "Git", value: 85 },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        img: one,
        description: "Fashion Style Website (React + Firebase): Auth, realtime DB, ML recommendations using Myntra dataset.",
        link: "https://github.com/Rahul-chauhan2000/Fashion-Style-website",
    },
    {
        img: two,
        description: "Laptop Price Prediction (ML): Regression, feature engineering, MSE & R² evaluation.",
        link: "https://github.com/Rahul-chauhan2000",
    },
    {
        img: four,
        description: "3D Carousel UI Component (React + Vite + CSS 3D)",
        link: "https://github.com/Rahul-chauhan2000/3d-carousel",
    },
];

const contactConfig = {
    YOUR_EMAIL: "rc777414@gmail.com",
    YOUR_FONE: "7078931309",
    description: "Open to roles in frontend/backend engineering. Let’s build clean UI and scalable APIs.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Rahul-chauhan2000",
    linkedin: "https://www.linkedin.com/in/rahul-chauhan-101726370/",
    instagram: "https://www.instagram.com/rahul_chauhan839/A",
    mail: "mailto:rc777414@gmail.com",
};
const education = [
    { degree: "MCA", institution: "Galgotias University" },
    { degree: "B.Sc (Maths)", institution: "[Institution]" },
];
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    education,
};