import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
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
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

type Skill = {
  title: string;
  elements: { icon: React.ReactElement; text: string }[];
};


export const skills: Skill[] = [
  {
    title: "Programs",
    elements: [
      { icon: <SiVisualstudiocode />, text: "Visual Studio Code" },
      { icon: <SiAdobephotoshop />, text: "Adobe Photoshop" },
      { icon: <SiAdobepremierepro />, text: "Adobe Premiere Pro" },
      { icon: <SiAdobeillustrator />, text: "Adobe Illustrator" },
      { icon: <SiAdobeaftereffects />, text: "Adobe After Effects" },
    ],
  },
  {
    title: "Libraries",
    elements: [
      { icon: <FaReact />, text: "React" },
      { icon: <SiRedux />, text: "Redux" },
      { icon: <SiStyledcomponents />, text: "Styled Components" },
      { icon: <SiReactquery />, text: "React Query" },
      { icon: <TbBrandReactNative />, text: "React Native" },
      { icon: <SiMui />, text: "Material-UI" },
    ],
  },
  {
    title: "Technologies",
    elements: [
      { icon: <FaHtml5 />, text: "HTML5" },
      { icon: <FaCss3 />, text: "CSS3" },
      { icon: <SiTypescript />, text: "TypeScript" },
      { icon: <IoLogoJavascript />, text: "JavaScript" },
      { icon: <FaAngular />, text: "Angular" },
      { icon: <DiScrum />, text: "Scrum" },
      { icon: <FaGithub />, text: "GitHub" },
      { icon: <FaAws />, text: "AWS" },
      { icon: <FaNpm />, text: "npm" },
      { icon: <FaJira />, text: "Jira" },
      { icon: <FaFigma />, text: "Figma" },
    ],
  },
];
