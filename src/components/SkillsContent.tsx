"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillProps, frontendSkills, backendSkills } from "@/helper";

const SkillsContent = () => {
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
                {frontendSkills.map(
                  ({ name, icon: Icon, color }: SkillProps, idx) => (
                    <motion.div
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex flex-col border-2 h-[100px] border-[#9f70fd] items-center justify-center gap-2 bg-[#1a1a1a] text-center rounded-xl p-5 shadow-md hover:shadow-[#9f70fd]/40 hover:scale-105 transition-all duration-300"
                      key={idx}
                    >
                      <div className="text-2xl">
                        <Icon size={22} className={color} />
                      </div>
                      <p className="text-sm font-medium text-white">{name}</p>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-white text-center md:text-left mt-5">
                Backend
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-6">
                {backendSkills.map(
                  ({ name, icon: Icon, color }: SkillProps, idx) => (
                    <motion.div
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex flex-col border-2 h-[100px] border-[#9f70fd] items-center justify-center gap-2 bg-[#1a1a1a] text-center rounded-xl p-5 shadow-md hover:shadow-[#9f70fd]/40 hover:scale-105 transition-all duration-300"
                      key={idx}
                    >
                      <div className="text-2xl">
                        {" "}
                        <Icon size={22} className={color} />
                      </div>
                      <p className="text-sm font-medium text-white">{name}</p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SkillsContent;
