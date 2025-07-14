"use client";
import React from "react";
import { motion } from "framer-motion";
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
import Image from "next/image";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <Image src="/next-icon.svg" alt="Next.js" width={30} height={30} />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  {
    name: "Material UI",
    icon: <SiMaterialdesign className="text-indigo-400" />,
  },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const SkillCard = ({
  name,
  icon,
  delay,
}: {
  name: string;
  icon: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="flex flex-col border-2 h-[100px] border-[#9f70fd] items-center justify-center gap-2 bg-[#1a1a1a] text-center rounded-xl p-5 shadow-md hover:shadow-[#9f70fd]/40 hover:scale-105 transition-all duration-300"
  >
    <div className="text-2xl">{icon}</div>
    <p className="text-sm font-medium text-white">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center  bg-gradient-to-tr from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]
       items-center min-h-[85vh]"
    >
      <main className="sm:w-[98vw] w-full md:rounded-lg  max-w-[1050px] bg-[#0a0a0a] gap-5 items-center mx-auto flex flex-col  justify-between p-4">
        <div className="text-center">
          <p className="sm:text-5xl text-4xl font-extrabold text-[#9f70fd] sm:mt-[70px] mt-[45px]">
            My Skills
          </p>
        </div>
        <div className="flex flex-col  w-full mx-auto sm:mb-[90px] mb-[100px]">
          <div className="grid grid-cols-1 w-full gap-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-white text-center sm:mt-0 mt-6 md:text-left">
                Frontend
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6 ">
                {frontendSkills.map((skill, idx) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={idx * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-white text-center md:text-left mt-5">
                Backend
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6">
                {backendSkills.map((skill, idx) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={idx * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
