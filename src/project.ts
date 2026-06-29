import BinQutabImg from "@/projects/BinQutab.png";
import BNoorImg from "@/projects/BNoor.png";
import CartImg from "@/projects/cart.png";
import EcommerceImg from "@/projects/ecommerce.png";
import GeminiImg from "@/projects/Gemini.png";
import NikeImg from "@/projects/nike.png";
import TravelImg from "@/projects/travel.png";
import Prac7Img from "@/projects/ecommerce-stack.png";
import Prac8Img from "@/projects/post-creation.png";
import Prac10Img from "@/projects/job-post-App.png";
import Prac11Img from "@/projects/chatApp.png";
import Prac12Img from "@/projects/product-landing-page.png";
import Prac13Img from "@/projects/waether-dashboard.png";
import Prac14Img from "@/projects/spotify-clone.png";
import Prac15Img from "@/projects/chatbot.png";
import Prac16Img from "@/projects/blog-app.png";
import Prac3 from "@/projects/prac3.png"
import Prac4 from "@/projects/prac4.png"
import Prac1 from "@/projects/prac1.png"
import Prac2 from "@/projects/prac2.png"
import Prac5 from "@/projects/prac5.png"
import Prac6 from "@/projects/prac6.png"
import Prac17Img from "@/projects/resturant-website.png"
import Prac18Img from "@/projects/todo-app.png"
import Prac19Img from "@/projects/quiz-app.png"
import type { StaticImageData } from "next/image";

export type ProjectType = "frontend" | "fullstack" | "client" | "practice";

export interface Project {
  title: string;
  proImg: string | StaticImageData;
  link: string;
  gitHub: string;
  linkedIn: string;
  desc: string;
  projectType: ProjectType;
  techStack: string[];
  features: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Full Stack E-Commerce Platform",
    proImg: Prac7Img,
    link: "https://ecommerce-frontend-blond-five.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A MERN stack e-commerce application with product browsing, cart flow, authentication, and responsive UI for online shopping.",
    projectType: "fullstack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS","Stripe"],
    features: [
      "Product listing and detail pages",
      "Cart management",
      "Authentication flow",
      "Responsive frontend design",
    ],
    featured: true,
  },
  {
    title: "Blog Application",
    proImg: Prac16Img,
    link: "https://blog-app-five-mu-20.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A full stack blog platform where users can create, view, and manage posts with a clean and modern interface.",
    projectType: "fullstack",
    techStack: ["Next.js","Typescript", "Prisma", "Postgres", "Vercel","Supabase"],
    features: [
      "Create and manage blog posts",
      "Clean content layout",
      "API-based data handling",
      "Mobile responsive UI",
    ],
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    proImg: Prac11Img,
    link: "https://chat-app-frontend-omega-two.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A MERN stack chat application focused on real-time communication, authentication, and user-friendly messaging experience.",
    projectType: "fullstack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: [
      "User authentication",
      "Chat interface",
      "Real-time messaging structure",
      "Responsive design",
    ],
    featured: true,
  },
  {
    title: "Job Posting Platform",
    proImg: Prac10Img,
    link: "https://job-post-1rn4.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A full stack job posting application where users can create and browse job posts with a professional dashboard-style layout.",
    projectType: "fullstack",
    techStack: ["Next.js", "Prisma", "Postgres", "Supabase"],
    features: [
      "Job post creation",
      "Job listing page",
      "Reusable UI components",
      "API integration",
    ],
    featured: true,
  },
  {
    title: "Post Creation App",
    proImg: Prac8Img,
    link: "https://my-posts-frontend.vercel.app",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A full stack post management app where users can create and view posts through a simple, clean, and responsive interface.",
    projectType: "fullstack",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Post creation",
      "Post listing",
      "Backend API integration",
      "Responsive layout",
    ],
  },
  {
    title: "AI Chatbot Interface",
    proImg: Prac15Img,
    link: "https://chat-bot-gi5s.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7/chat_bot",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A modern AI chatbot frontend with a clean conversation layout and responsive design.",
    projectType: "frontend",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Chat-style UI",
      "Responsive layout",
      "Modern frontend design",
      "Clean component structure",
    ],
    featured: true,
  },
  {
    title: "Weather Dashboard",
    proImg: Prac13Img,
    link: "https://weather-dashboard-ten-rust.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7/weather-dashboard",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A responsive weather dashboard that displays weather-related information in a clean and easy-to-read UI.",
    projectType: "frontend",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Weather dashboard layout",
      "Responsive cards",
      "Clean data presentation",
      "Modern UI styling",
    ],
  },
  {
    title: "Returant Website",
    proImg: Prac17Img,
    link: "https://vocal-fox-92fcb2.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A responsive resturant webiste.",
    projectType: "frontend",
    techStack: ["HTML", "CSS3", "Javascript"],
    features: [
      "Resturant Website layout",
      "Responsive cards",
      "Clean data presentation",
      "Modern UI styling",
    ],
  },
   {
    title: "Todo App",
    proImg: Prac18Img,
    link: "https://todo-puce-iota-65.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A responsive Todo App for task management.",
    projectType: "frontend",
    techStack: ["React", "Vite", "Tailwind CSS", "Redux Toolkit"],
    features: [
      "Todo App layout",
      "Responsive cards",
      "Clean data presentation",
      "Modern UI styling",
    ],
  },
  {
    title: "Quiz App",
    proImg: Prac19Img,
    link: "https://quizz-app-rouge.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A responsive Quiz App for brain testing.",
    projectType: "frontend",
    techStack: ["React", "Vite", "Tailwind CSS",],
    features: [
      "Quiz App layout",
      "Responsive cards",
      "Clean data presentation",
      "Modern UI styling",
    ],
  },
  {
    
    title: "Product Landing Page",
    proImg: Prac12Img,
    link: "https://smart-wtach-landing-page-yxyf.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7/smartWtach-landing-page",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A professional product landing page designed for a smart watch with strong visual hierarchy and responsive sections.",
    projectType: "frontend",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    features: [
      "Hero section",
      "Product feature sections",
      "Responsive design",
      "Call-to-action layout",
    ],
  },
  {
    title: "Spotify Clone",
    proImg: Prac14Img,
    link: "https://spotify-clone-topaz-nu.vercel.app/",
    gitHub: "https://github.com/Rohama-Majeed7/spotify-clone",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A Spotify-inspired frontend clone built to practice modern layout, spacing, and music app UI design.",
    projectType: "frontend",
    techStack: ["React", "Tailwind CSS"],
    features: [
      "Music app layout",
      "Responsive design",
      "Card-based UI",
      "Frontend styling practice",
    ],
  },
  {
    title: "Travel Website",
    proImg: TravelImg,
    link: "https://luxury-pastelito-6dddb1.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/Travel",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A responsive travel website built with modern frontend tools, including sliders and visually attractive travel sections.",
    projectType: "frontend",
    techStack: ["React", "Tailwind CSS", "Swiper.js"],
    features: [
      "Travel destination sections",
      "Swiper slider",
      "Responsive UI",
      "Modern page design",
    ],
  },
  {
    title: "Add to Cart App",
    proImg: CartImg,
    link: "https://lambent-gnome-0cbe3e.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/Add_To_Cart",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A React shopping cart project built to practice state management, product handling, and Redux Toolkit.",
    projectType: "frontend",
    techStack: ["React", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "Add to cart functionality",
      "State management",
      "Product card layout",
      "Responsive UI",
    ],
  },
  {
    title: "Gemini UI Clone",
    proImg: GeminiImg,
    link: "https://radiant-caramel-1f7894.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A responsive Gemini-inspired frontend UI built with React Context API and Tailwind CSS.",
    projectType: "frontend",
    techStack: ["React", "Context API", "Tailwind CSS"],
    features: [
      "Gemini-inspired interface",
      "Context API usage",
      "Responsive layout",
      "Modern frontend styling",
    ],
  },
  {
    title: "Bin Qutab Foundation Website",
    proImg: BinQutabImg,
    link: "https://rohama-majeed7.github.io/Bin-Qutab-Foundation/",
    gitHub: "https://github.com/Rohama-Majeed7/Bin-Qutab-Foundation",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A client-style foundation website created to present organization information, services, and social impact in a clean layout.",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Organization landing page",
      "Clean sections",
      "Responsive layout",
      "Informational website design",
    ],
  },
   {
    title: "Begum Noor Memorial Hospital Website",
    proImg: BNoorImg,
    link: "https://rohama-majeed7.github.io/Bin-Qutab-Foundation/",
    gitHub: "https://github.com/Rohama-Majeed7/Bin-Qutab-Foundation",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A hospital-related web page designed to present services and information in a simple, accessible format.",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Hospital information layout",
      "Service presentation",
      "Simple navigation",
      "Responsive sections",
    ],
  },
   {
    title: "Dashboard Clone",
    proImg: Prac4,
    link: "https://rohama-majeed7.github.io/project11/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Cloned the dashboard for the client on fiver",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Cloned Dsahboard",
      "Clean sections",
      "Responsive layout",
      "Informational website design",
    ],
  },
  {
    title: "Nuss Website",
    proImg: Prac3,
    link: "https://rohama-majeed7.github.io/project10/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Cloned the Nuss website for the client on fiver",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Cloned Nuss Website",
      "Clean sections",
      "Responsive layout",
      "Informational website design",
    ],
  },
   {
    title: "Bored ape yacht club Dashboard",
    proImg: Prac1,
    link: "https://rohama-majeed7.github.io/project7/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "Build the frontend dashboard for the client on fiver",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Frontend Dashboard",
      "Clean sections",
      "Responsive layout",
      "Informational website design",
    ],
  },
  
  {
    title: "Airmoto Website",
    proImg: Prac2,
    link: "https://rohama-majeed7.github.io/project4/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "I have cloned the Airmoto website for the client on fiver",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Cloned Airmoto Website",
      "Clean sections",
      "Responsive layout",
      "Informational website design",
    ],
  },
  {
    title: "Cloned Website",
    proImg: Prac5,
    link: "https://rohama-majeed7.github.io/Blog/",
    gitHub: "https://github.com/Rohama-Majeed7",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "I have cloned the clothe rating website for the client on fiver",
    projectType: "client",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Cloned Website",
      "Clean sections",
      "Responsive layout",
      "Informational website design",
    ],
  },
 
  {
    title: "Nike Landing Page",
    proImg: NikeImg,
    link: "https://aquamarine-profiterole-872fea.netlify.app/",
    gitHub: "",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A Nike-inspired landing page clone focused on visual design, product presentation, and frontend layout practice.",
    projectType: "frontend",
    techStack: ["React", "Vite", "Tailwind CSS"],
    features: [
      "Product hero section",
      "Responsive layout",
      "Modern landing page styling",
      "Frontend design practice",
    ],
  },
  {
    title: "Basic E-Commerce Frontend",
    proImg: EcommerceImg,
    link: "https://e-commerce156.netlify.app/",
    gitHub: "https://github.com/Rohama-Majeed7/ecommerce-site",
    linkedIn: "https://www.linkedin.com/in/rohama-majeed-213124282",
    desc: "A basic e-commerce frontend built with HTML, CSS, and JavaScript to practice product layout and shopping UI.",
    projectType: "practice",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Product layout",
      "Basic shopping UI",
      "Responsive structure",
      "Frontend practice",
    ],
  },
];

export default projects;