import { FolderOpenDot, Mail } from "lucide-react";
import { FaHtml5, FaTrello } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import pl from "../common/Images/Languages/poland.svg";
import gb from "../common/Images/Languages/english.svg";
import ger from "../common/Images/Languages/german.svg";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { LuContact } from "react-icons/lu";

export const navLinks = [
    { text: "navbar.home", to: "home", img: <FaHome /> },
    { text: "navbar.portfolio", to: "portfolio", img: <GoProjectRoadmap /> },
    { text: "navbar.skills", to: "skills", img: <FaCode /> },
    { text: "navbar.about", to: "about", img: <CiUser /> },
    { text: "navbar.contact", to: "contact", img: <LuContact /> },
];

export const socialLinks = [
    { name: "GitHub", href: "https://github.com/mizdebski77", bg: "#242551" },
    {
        name: "Facebook",
        href: "https://www.facebook.com/marcin.izdebski.7528",
        bg: "#1476ff",
    },
    { name: "Email", href: "mailto:marcin.izdebski.contact@gmail.com", bg: "#ad3030" },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/marcin-izdebski-63b7a026a/",
        bg: "#14adff",
    },
];

export const heroButtons = [
    { name: "hero.cta1", type: "Frontend", icon: Mail, to: "contact" },
    {
        name: "hero.cta2",
        type: "Frontend",
        icon: FolderOpenDot,
        to: "portfolio",
    },
];

export const projectsLinks = [
    { title: "projects.link1", type: "Web Applications" },
    // { title: "projects.link2", type: "Mobile Applications" },
    { title: "projects.link3", type: "Landing page" },
];

export const techLinks = [
    { title: "technologies.category1", type: "Frontend" },
    { title: "technologies.category2", type: "Backend" },
    { title: "technologies.category3", type: "Teamwork" },
    { title: "technologies.category4", type: "UI" },
];

export const languages = [
    {
        id: 1,
        name: "about.langTitle3",
        icon: pl,
        translation: "pl",
    },

    {
        id: 2,
        name: "about.langTitle1",
        icon: gb,
        translation: "en",
    },

    {
        id: 3,
        name: "about.langTitle2",
        icon: ger,
        translation: "ger",
    },
];

export const projects = [
    {
        id: 1,
        name: "Polskie paulownie",
        description: "portfolio.landing1",
        type: "Landing page",
        tags: [
            "React",
            "Firebase",
            "TypeScript",
            "Tanstack query",
            "Git",
        ],
        image: "https://i.postimg.cc/Nf7L3Z3v/PP.png",
        liveUrl: "https://polskiepaulownie.pl",
        codeUrl: "",
    },
    {
        id: 2,
        name: "SB pracownia",
        description: "portfolio.landing2",
        type: "Landing page",
        tags: [
            "React",
            "React router",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Git",
        ],
        image: "https://i.postimg.cc/ZKF0GXGS/sb.png",
        liveUrl: "https://www.sbpracownia.pl",
        codeUrl: "",
    },
    {
        id: 3,
        name: "mirosławstach.pl",
        description: "portfolio.landing3",
        type: "Landing page",
        tags: [
            "React",
            "React Router",
            "TypeScript",
            "Styled-Components",
            "Git",
        ],
        image: "https://i.postimg.cc/5NqjhDhM/ms.png",
        liveUrl: "https://www.miroslawstach.pl",
        codeUrl: "",
    },

    {
        id: 4,
        name: "Portfolio",
        description: "portfolio.landing5",
        type: "Landing page",
        tags: [
            "React",
            "Three.js",
            "TypeScript",
            "Framer motion",
            "Git",
        ],
        image: "https://i.postimg.cc/SR5hjJJ1/port.png",
        liveUrl: "https://mizdebski77.github.io/portfolio/",
        codeUrl: "",
    },

    {
        id: 5,
        name: "Optimize performance",
        description: "portfolio.landing4",
        type: "Landing page",
        tags: [
            "React",
            "Styled components",
            "React router",
            "Framer motion",
            "Git",
        ],
        image: "https://i.postimg.cc/c4M6pPpy/op.png",
        liveUrl: "https://www.optimizeperformance.pl",
        codeUrl: "",
    },
    {
        id: 6,
        name: "Ingreso",
        description: "portfolio.landing6",
        type: "Landing page",
        tags: [
            "Wordpress",
            "Elementor",
            "CSS",
            "Wordpress extinctions",
        ],
        image: "https://i.postimg.cc/B6Rwg8d1/Ing.png",
        liveUrl: "https://ingreso.pl/",
        codeUrl: "",
    },

    {
        id: 6,
        name: "w161",
        description: "portfolio.landing7",
        type: "Landing page",
        tags: [
            "JavaScript",
            "HTML",
            "CSS",
            "Email.js",
        ],
        image: "https://i.postimg.cc/X7cXRtRW/w161.png",
        liveUrl: "https://ingreso.pl/w161/",
        codeUrl: "",
    },
    {
        id: 1,
        name: "Tatry Razem",
        description: "A full-stack application to help find companions for mountain hikes (Application under development).",
        type: "Web Applications",
        tags: [
            "Next.js",
            "Redux",
            "Typescript",
            "Supabase",
            "Git",
            "Tanstack-query",
        ],
        image: "https://i.postimg.cc/1XTQ4f85/tr.png",
        // liveUrl: "https://tatry-razem-theta.vercel.app/",
        codeUrl: "",
    },

    {
        id: 2,
        name: "Trek-Shop",
        type: "Web Applications",
        description: "portfolio.project2",
        tags: [
            "React",
            "Redux",
            "Typescript",
            "Styled-components",
            "Git",
            "Tanstack-query",
        ],
        image: "https://i.postimg.cc/HWPH6PBc/trek.png",
        liveUrl: "https://mizdebski77.github.io/Trek-Shop/",
        codeUrl: "https://github.com/mizdebski77/Trek-Shop",
    },

    {
        id: 3,
        name: "Easy-Employ",
        type: "Web Applications",
        description: "portfolio.project3",
        tags: [
            "React",
            "Typescript",
            "Redux",
            "Styled-components",
            "Git",
            "Tanstack-query",
        ],
        image: "https://i.postimg.cc/D0mh2qyr/Ee.png",
        liveUrl: "https://mizdebski77.github.io/Easy-Employ/",
        codeUrl: "https://github.com/mizdebski77/Easy-Employ",
    },

    {
        id: 4,
        name: "Movie Browser",
        type: "Web Applications",
        description: "portfolio.project4",
        tags: [
            "React",
            "Redux",
            "Redux-saga",
            "Javascript",
            "Styled-components",
            "Git",
        ],
        image: "https://i.postimg.cc/jqJKk4m5/Screenshot_2026_04_08_160110.png",
        liveUrl: "https://mizdebski77.github.io/Movie-Browser/",
        codeUrl: "https://github.com/mizdebski77/Movie-Browser",
    },

    {
        id: 7,
        name: "Wheather App",
        type: "Web Applications",
        description: "portfolio.project5",
        tags: [
            "React",
            "Redux",
            "Javascript",
            "Styled-components",
            "Git",
            "Redux-saga",
        ],
        image: "https://i.postimg.cc/y6rBLrvR/wth.png",
        liveUrl: "https://mizdebski77.github.io/Weather-React-Redux-App/",
        codeUrl: "https://github.com/mizdebski77/Weather-React-Redux-App",
    },

    {
        id: 8,
        name: "Crud App",
        type: "Web Applications",
        description: "portfolio.project6",
        tags: ["Angular", "Scss", "Javascript", "Html", "Git"],
        image: "https://i.postimg.cc/yxWKVFYk/crud.png",
        liveUrl: "https://crud-app-angular-seven.vercel.app/home",
        codeUrl: "",
    },

    // {
    //     id: 9,
    //     name: "To do app",
    //     type: "Web Applications",
    //     description: "portfolio.project7",
    //     tags: ["React", "Styled-components", "Redux", "Redux saga", "Git"],
    //     image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/tasksList.png",
    //     liveUrl: "https://mizdebski77.github.io/Tasks-List-ReactJS/",
    //     codeUrl: "https://github.com/mizdebski77/Tasks-List-ReactJS",
    // },

    {
        id: 12,
        name: "Think1st training app",
        type: "Web Applications",
        description: "portfolio.project8",
        tags: ["React", "Tailwind css", "Tanstack query", "Api", "Git"],
        image: "https://i.postimg.cc/vTjsDc4s/th1.png",
        liveUrl: "https://mizdebski77.github.io/Training-App/",
        codeUrl: "",
    },
];

export const skills = [
    {
        type: "Frontend",
        icon: <FaReact style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>React</span>,
        color: "#61DAFB",
    },
    {
        type: "Frontend",
        icon: <SiRedux style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Redux</span>,
        color: "#764ABC",
    },
    {
        type: "Frontend",
        icon: <SiNextdotjs style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Next.js</span>,
        color: "#FFFFFF",
    },
    {
        type: "Frontend",
        icon: <TbBrandReactNative style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>React Native</span>,
        color: "#61DAFB",
    },
    {
        type: "Frontend",
        icon: <FaHtml5 style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>HTML5</span>,
        color: "#E34F26",
    },
    {
        type: "Frontend",
        icon: <FaCss3 style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>CSS3</span>,
        color: "#1572B6",
    },
    {
        type: "Frontend",
        icon: <SiTypescript style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>TypeScript</span>,
        color: "#3178C6",
    },
    {
        type: "Frontend",
        icon: <FaAngular style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Angular</span>,
        color: "#c63138",
    },
    {
        type: "Frontend",
        icon: <IoLogoJavascript style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>JavaScript</span>,
        color: "#F7DF1E",
    },
    {
        type: "Frontend",
        icon: <SiTailwindcss style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Tailwind CSS</span>,
        color: "#06B6D4",
    },
    {
        type: "Frontend",
        icon: <SiReactquery style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Tanstack Query</span>,
        color: "#eb4949",
    },
    {
        type: "Frontend",
        icon: <SiStyledcomponents style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Styled Components</span>,
        color: "#DB7093",
    },
    {
        type: "Frontend",
        icon: <SiMui style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Material-UI</span>,
        color: "#007FFF",
    },
    {
        type: "Frontend",
        icon: <SiSass style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Sass</span>,
        color: "#CC6699",
    },

    {
        type: "Backend",
        icon: <FaNodeJs style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Node.js</span>,
        color: "#339933",
    },
    {
        type: "Backend",
        icon: <IoLogoFirebase style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Firebase</span>,
        color: "#FFCA28",
    },
    {
        type: "Backend",
        icon: <SiSupabase style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Supabase</span>,
        color: "#3ECF8E",
    },

    {
        type: "UI",
        icon: <FaFigma style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Figma</span>,
        color: "#F24E1E",
    },
    {
        type: "UI",
        icon: <SiAdobephotoshop style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Adobe Photoshop</span>,
        color: "#31A8FF",
    },
    {
        type: "UI",
        icon: <SiAdobepremierepro style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Premiere Pro</span>,
        color: "#9999FF",
    },
    {
        type: "UI",
        icon: <SiAdobeaftereffects style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>After Effects</span>,
        color: "#9999FF",
    },

    {
        type: "Teamwork",
        icon: <FaGithub style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>GitHub</span>,
        color: "#FFFFFF",
    },
    {
        type: "Teamwork",
        icon: <FaJira style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Jira</span>,
        color: "#0052CC",
    },
    {
        type: "Teamwork",
        icon: <DiScrum style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Scrum</span>,
        color: "#6A1B9A",
    },
    {
        type: "Teamwork",
        icon: <FaTrello style={{ margin: "0 auto" }} />,
        text: <span style={{ margin: "0 auto" }}>Trello</span>,
        color: "#0079BF",
    },
];
