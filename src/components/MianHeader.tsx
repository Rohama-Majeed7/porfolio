"use client";

import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/helper";
import { NavItemProps } from "@/helper";


const MianHeader = () => {

  return (
    <>
      <AnimatePresence>
        
          <motion.nav
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed z-50 top-1 md:static bg-[#26333a] border-[#4fced5] shadow-[0_0_5px_#4fced5] flex w-full mx-auto justify-between p-2 rounded-lg"
          >
            {navItems.map(({ href, icon:Icon, label }:NavItemProps, idx) => (
              <motion.div key={idx} >
                <Link
                  href={href}
                  className="group relative flex items-center gap-3"
                >
                  <div className="p-2 text-sm rounded-full border-2 border-[#4fced5] bg-[#1a2328] text-white hover:bg-gradient-to-tr from-[#4fced5] via-[#4fced5] to-[#4fced5] shadow-lg transition-all duration-300 hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <span className="absolute bottom-[50px] border-[#4fced5] border-2 shadow  opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-white bg-[#1a2328] px-3 py-1 text-sm hidden md:block rounded-md shadow-[#4fced5] whitespace-nowrap">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
      </AnimatePresence>
  
    </>
  );
};

export default MianHeader;
