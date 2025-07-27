"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/helper";
import { NavItemProps } from "@/helper";
// const sidebarVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring" as const, stiffness: 80 },
//   },
// };

const MianHeader = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {/* <div className="hidden md:flex  justify-between border-2 border-b-[#9f70fd] border-r-0 border-t-0 border-l-0 z-50 p-3 bg-[#0a0a0a8a]">
         <Link href={"/"} className="text-2xl font-bold bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] bg-clip-text text-transparent">
          Romi.Dev
        </Link>
        <button
          onClick={() => setShowSidebar((prev) => !prev)}
          className="p-2 rounded-md border border-[#9f70fd] bg-[#1a1a1a] text-white"
        >
          {showSidebar ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div> */}
      <AnimatePresence>
        
          <motion.nav
            // variants={sidebarVariants}
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
                  <span className="absolute right-14 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white bg-[#1a2328] px-3 py-1 text-sm hidden sm:block rounded-md shadow-lg whitespace-nowrap">
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
