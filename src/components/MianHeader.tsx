"use client";

import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/helper";
import { NavItemProps } from "@/helper";

const MianHeader = () => {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="
          sticky
          top-0
          z-50

          w-full

          flex
          items-center
          justify-between

          px-3
          py-2

          rounded-2xl

          bg-[#26333a]/90
          backdrop-blur-xl

          border
          border-[#4fced5]/40

          shadow-[0_0_12px_rgba(79,206,213,0.25)]

          
        "
      >
        {navItems.map(
          ({ href, icon: Icon, label }: NavItemProps, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link
                href={href}
                className="group relative flex items-center justify-center"
              >
                {/* ICON */}
                <div
                  className="
                    p-2.5
                    rounded-xl

                    border
                    border-[#4fced5]/60

                    bg-[#1a2328]
                    text-white

                    transition-all
                    duration-300

                    hover:bg-[#4fced5]
                    hover:text-black
                    hover:shadow-[0_0_15px_rgba(79,206,213,0.6)]
                    hover:scale-105
                  "
                >
                  <Icon size={20} />
                </div>

                {/* TOOLTIP */}
                <span
                  className="
                    absolute
                    -bottom-8
                    left-1/2
                    -translate-x-1/2

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-300

                    bg-[#1a2328]
                    text-white
                    text-xs

                    border
                    border-[#4fced5]/40

                    px-3
                    py-1.5

                    rounded-lg
                    whitespace-nowrap

                    hidden
                    md:block
                  "
                >
                  {label}
                </span>
              </Link>
            </motion.div>
          )
        )}
      </motion.nav>
    </AnimatePresence>
  );
};

export default MianHeader;