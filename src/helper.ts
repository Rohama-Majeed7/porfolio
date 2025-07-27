"use client";

import {
  Home,
  FileText,
  FolderKanban,
  Code,
  Mail,
  LucideIcon,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMaterialdesign,
  SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";
// Navigation Types
export interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const navItems: NavItemProps[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/resume", icon: FileText, label: "Resume" },
  { href: "/projects", icon: FolderKanban, label: "Projects" },
  { href: "/skills", icon: Code, label: "Skills" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

// Skills Types
export interface SkillProps {
  name: string;
  icon: IconType;
  color: string;
}

export const frontendSkills: SkillProps[] = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  {
    name: "Material UI",
    icon: SiMaterialdesign,
    color: "text-indigo-400",
  },
];

export const backendSkills: SkillProps[] = [
  { name: "Node.js", icon: FaNodeJs, color:"text-green-500"  },
  { name: "Express.js", icon: SiExpress, color:"text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color:"text-green-400" },
];

export const resumeData = [
  {
    year: "2019 - 2020",
    title: "Matriculation",
    desc: "Muslim Green Public School, M.Garh",
  },
  {
    year: "2020 - 2022",
    title: "Intermediate",
    desc: "Govt Degree College, M.Garh",
  },
  {
    year: "2022 - 2026",
    title: "Software Engineering, Graduation",
    desc: "UET, Taxila",
  },
];