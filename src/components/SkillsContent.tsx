"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillProps, frontendSkills, backendSkills } from "@/helper";

const SkillsContent = () => {
  return (
    <section id="skills" className="bg-[#26333a] border-[#4fced5] shadow-[0_0_7px_#4fced5] h-[87%] p-2 sm:rounded-lg">
      <main className="h-full flex flex-col">
        <div className="text-left flex flex-col gap-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className=" font-extrabold text-[#4fced5] text-2xl "
          >
            <span className="text-white">My</span> Skills
          </motion.p>
          <div className="bg-[#4fced5] h-1 w-27 rounded-lg mb-2"></div>
        </div>
        <div className="flex flex-col  w-full mx-auto overflow-auto scrollable">
          <div className="grid grid-cols-1 w-full gap-2">
            <div className="flex flex-col  gap-2">
              <h3 className="text-xl font-semibold text-white text-center  md:text-left">
                Frontend
              </h3>
              <div className="flex gap-2 flex-wrap justify-center md:justify-start ">
                {frontendSkills.map(
                  ({ name, icon: Icon, color }: SkillProps, idx) => (
                    <motion.div
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex flex-col border-2 h-[100px] w-[100px] border-[#4fced5] items-center justify-center gap-2 bg-[#1a2328] text-center rounded-xl p-5 shadow-md hover:shadow-[#4fced5]/40 hover:scale-105 transition-all duration-300"
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

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-white text-center md:text-left mt-5">
                Backend
              </h3>
              <div className="flex  flex-wrap justify-center md:justify-start gap-6">
                {backendSkills.map(
                  ({ name, icon: Icon, color }: SkillProps, idx) => (
                    <motion.div
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex bg-[#1a2328] flex-col border-2 h-[100px] w-[100px] border-[#4fced5] items-center justify-center gap-2  text-center rounded-xl p-5 shadow-md hover:shadow-[#4fced5]/40 hover:scale-105 transition-all duration-300"
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
