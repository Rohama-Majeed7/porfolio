"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

const ContactContent = () => {
  return (
    <section
      id="contact"
      className="
        h-full
        w-full
        rounded-2xl
        bg-[#1b262c]
        border border-[#4fced5]/40
        shadow-[0_0_15px_rgba(79,206,213,0.15)]
        overflow-hidden
      "
    >
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col h-full p-3 sm:p-4 gap-3"
      >
        {/* HEADER */}
        <div>
          <p className="text-xl sm:text-2xl font-bold text-white">
            Contact <span className="text-[#4fced5]">Me</span>
          </p>
          <div className="h-1 w-16 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* FORM AREA */}
        <div className="flex-1 flex items-center justify-center">
          <form
            className="
              w-full
              max-w-lg

              space-y-3

              bg-white/5
              border border-white/10

              rounded-2xl

              p-4

              shadow-md
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                p-2.5
                rounded-xl

                bg-black/20
                text-white

                border border-white/10
                focus:border-[#4fced5]
                focus:outline-none
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                p-2.5
                rounded-xl

                bg-black/20
                text-white

                border border-white/10
                focus:border-[#4fced5]
                focus:outline-none
              "
            />

            <textarea
              rows={3}
              placeholder="Your Message"
              className="
                w-full
                p-2.5
                rounded-xl

                bg-black/20
                text-white

                border border-white/10
                focus:border-[#4fced5]
                focus:outline-none
                resize-none
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                flex items-center justify-center gap-2

                py-2.5

                rounded-xl
                bg-[#4fced5]
                text-black
                font-semibold

                hover:scale-105
                transition-all
              "
            >
              <Send size={18} />
              Send Message
            </button>

            {/* SOCIALS */}
            <div className="flex justify-center gap-3 pt-2">
              {[
                { icon: <Mail size={18} />, href: "mailto:rohamamajeed4@gmail.com" },
                { icon: <Phone size={18} />, href: "tel:+923250336309" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/rohama-majeed-213124282" },
                { icon: <Github size={18} />, href: "https://github.com/Rohama-Majeed7" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="
                    h-9 w-9
                    flex items-center justify-center

                    rounded-lg

                    bg-white/5
                    border border-white/10

                    text-white

                    hover:bg-[#4fced5]
                    hover:text-black

                    transition
                  "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </form>
        </div>
      </motion.main>
    </section>
  );
};

export default ContactContent;