import BinQutabImg from "@/projects/BinQutab.png";
import BNoorImg from "@/projects/BNoor.png";
import CartImg from "@/projects/cart.png";
import EcommerceImg from "@/projects/ecommerce.png";
import GeminiImg from "@/projects/Gemini.png";
import NikeImg from "@/projects/nike.png";
import LoginImg from "@/projects/login.png";
import MenuImg from "@/projects/menu.png";
import TravelImg from "@/projects/travel.png";
import Prac1Img from "@/projects/prac1.png";
import Prac2Img from "@/projects/prac2.png";
import Prac3Img from "@/projects/prac3.png";
import Prac4Img from "@/projects/prac4.png";
import Prac6Img from "@/projects/prac6.png";
import Prac7Img from "@/projects/ecommerce-stack.png";
import Prac8Img from "@/projects/post-creation.png";

import type { StaticImageData } from "next/image";

export interface Project {
  proImg: string | StaticImageData;
  link: string;
  gitHub: string;
  linkedIn: string;
  desc: string;
  projectType: "practical" | "frontend" | "backend";
}

const projects: Project[] = [
  {
    proImg: BinQutabImg,
    link: "https://rohama-majeed7.github.io/Bin-Qutab-Foundation/",
    gitHub: "https://github.com/Rohama-Majeed7/Bin-Qutab-Foundation",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Excited to share my project with the Bin Qutub Foundation. Grateful for this experience and looking forward to more such meaningful collaborations!",
    projectType: "practical",
  },
  {
    proImg: BNoorImg,
    link: "https://rohama-majeed7.github.io/Bin-Qutab-Foundation/",
    gitHub: "https://github.com/Rohama-Majeed7/Bin-Qutab-Foundation",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Excited to share my project with the Bin Qutub Foundation for their Begum Noor Memorial Hospital.",
    projectType: "practical",
  },
  {
    proImg: CartImg,
    link: "https://lambent-gnome-0cbe3e.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/Add_To_Cart",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Add to Cart functionality using React, Tailwind, Redux, and Redux Toolkit.",
    projectType: "frontend",
  },
  {
    proImg: EcommerceImg,
    link: "https://e-commerce156.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/ecommerce-site",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A basic e-commerce frontend made with HTML, CSS, and JavaScript.",
    projectType: "frontend",
  },
  {
    proImg: GeminiImg,
    link: "https://radiant-caramel-1f7894.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/ecommerce-site",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Responsive Gemini Site using React Context API and Tailwind CSS.",
    projectType: "frontend",
  },
  {
    proImg: NikeImg,
    link: "https://aquamarine-profiterole-872fea.netlify.app/",
    gitHub: "nolink",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Nike landing page clone using Tailwind CSS and Vite.",
    projectType: "frontend",
  },
  {
    proImg: LoginImg,
    link: "https://verdant-tapioca-72a0b5.netlify.app/",
    gitHub: "nolink",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Login form with React, Tailwind and localStorage for storing user data.",
    projectType: "frontend",
  },
  {
    proImg: LoginImg,
    link: "https://verdant-tapioca-72a0b5.netlify.app/",
    gitHub: "nolink",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Login form with React, Tailwind and localStorage (duplicate project).",
    projectType: "frontend",
  },
  {
    proImg: MenuImg,
    link: "https://lnkd.in/gAWSBVFq",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Filter menu created with React.",
    projectType: "frontend",
  },
  {
    proImg: TravelImg,
    link: "https://luxury-pastelito-6dddb1.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/Travel",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Travel site using React, Tailwind, and Swiper.js.",
    projectType: "frontend",
  },
  {
    proImg: Prac1Img,
    link: "https://rohama-majeed7.github.io/project7/",
    gitHub: "https://github.com/Rohama-Majeed7/project7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Practical project - project 7 🌟",
    projectType: "practical",
  },
  {
    proImg: Prac2Img,
    link: "https://rohama-majeed7.github.io/Project4/",
    gitHub: "https://github.com/Rohama-Majeed7/Project4",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Practical project - project 4 🌟",
    projectType: "practical",
  },
  {
    proImg: Prac3Img,
    link: "https://rohama-majeed7.github.io/project10/",
    gitHub: "https://github.com/Rohama-Majeed7/project10",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Practical project - project 10 🌟",
    projectType: "practical",
  },
  {
    proImg: Prac4Img,
    link: "https://rohama-majeed7.github.io/project11/",
    gitHub: "https://github.com/Rohama-Majeed7/project11",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Practical project - project 11 🌟",
    projectType: "practical",
  },
  {
    proImg: Prac6Img,
    link: "https://rohama-majeed7.github.io/project5/",
    gitHub: "https://github.com/Rohama-Majeed7/project5",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Practical project - project 5 🌟",
    projectType: "practical",
  },
    {
    proImg: Prac7Img,
    link: "https://ecommerce-frontend-blond-five.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Mern Full Stack project - Ecommerce Website Project  🌟",
    projectType: "backend",
  },
   {
    proImg: Prac8Img,
    link: "https://vercel-frontend-k6z3.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "🌟 Mern Full Stack project - Post Creation Website Project 🌟",
    projectType: "backend",
  },
];

export default projects;
