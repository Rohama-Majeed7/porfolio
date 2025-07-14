"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Home,
  User,
  FileText,
  FolderKanban,
  Code,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", icon: <Home size={22} />, label: "Home" },
  { href: "/about", icon: <User size={22} />, label: "About" },
  { href: "/resume", icon: <FileText size={22} />, label: "Resume" },
  { href: "/projects", icon: <FolderKanban size={22} />, label: "Projects" },
  { href: "/skills", icon: <Code size={22} />, label: "Skills" },
  { href: "/contact", icon: <Mail size={22} />, label: "Contact" },
];

const sidebarVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80 },
  },
};

const MianHeader = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <div className="hidden md:flex  justify-between z-50">
         <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] bg-clip-text text-transparent">
          Romi.Dev
        </h1>
        <button
          onClick={() => setShowSidebar((prev) => !prev)}
          className="p-2 rounded-md border border-[#9f70fd] bg-[#1a1a1a] text-white"
        >
          {showSidebar ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {showSidebar && (
          <motion.nav
            variants={sidebarVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex flex-col gap-6 fixed right-4 top-20 z-40"
          >
            {navItems.map(({ href, icon, label }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  href={href}
                  className="group relative flex items-center gap-3"
                >
                  <div className="p-2 text-sm rounded-full border-2 border-[#9f70fd] bg-[#1a1a1a] text-white hover:bg-gradient-to-tr from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] shadow-lg transition-all duration-300 hover:scale-110">
                    {icon}
                  </div>
                  <span className="absolute right-14 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white bg-[#1a1a1a] px-3 py-1 text-sm rounded-md shadow-lg whitespace-nowrap">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MianHeader;
