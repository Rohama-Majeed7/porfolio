"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, LinkedinIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

const ContactContent = () => {
  return (
    <section
      id="contact"
      className="bg-[#26333a] border-[#4fced5] shadow-[0_0_7px_#4fced5] sm:rounded-lg relative h-[86%] p-2"
    >
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-3 h-full "
      >
       <div className="text-left">
          <p className=" font-extrabold text-[#4fced5] text-2xl  "><span className="text-white">Contact</span>{" "}Me</p>
          <div className="bg-[#4fced5] h-1 w-34 rounded-lg mb-2"></div>
        </div>
        
<div className="h-full overflow-auto md:w-[80%] w-[96%] mx-auto">
          <form className="space-y-2  h-full  self-center bg-[#1a2328] p-6 rounded-2xl border border-[#4fced5]/30 shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-[#4fced5] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4fced5]"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-[#4fced5] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4fced5]"
            />
            <textarea
              placeholder="Your Message"
              required
              className="w-full p-3 border border-[#4fced5] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4fced5]"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-b cursor-pointer from-[#326E7D] to-[#1E2F39]  text-white p-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
            <div className="flex justify-center gap-3 mt-3 text-white">
              <Link
                href={"mailto:rohamamajeed4@gmail.com"}
                className="rounded-full border-2 border-[#4fced5] hover:bg-white hover:text-[#4fced5] transition-all p-2"
              >
                <Mail />
              </Link>
              <Link
                href={"tel:+923250336309"}
                className="rounded-full border-2 hover:bg-white hover:text-[#4fced5] transition-all border-[#4fced5] p-2"
              >
                <Phone />
              </Link>
              <Link
                href={"https://linkedin.com/in/rohama-majeed-213124282"}
                className="rounded-full hover:bg-white hover:text-[#4fced5] transition-all border-2 border-[#4fced5] p-2"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href={"https://github.com/Rohama-Majeed7"}
                className="rounded-full hover:bg-white hover:text-[#4fced5] transition-all border-2 border-[#4fced5] p-2"
              >
                <GithubIcon />
              </Link>
            </div>
          </form>
          </div>
      </motion.main>
    </section>
  );
};

export default ContactContent;
