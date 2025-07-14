"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";
import Link from "next/link";
import ContactImg from "@/projects/contact.png";
import Image from "next/image";

const ContactContent = () => {
  return (
    <section
      id="contact"
      className="flex justify-center  bg-gradient-to-tr from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]
       items-center min-h-[85vh]"
    >
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:w-[98vw] w-full md:rounded-lg  max-w-[1050px] bg-[#0a0a0a] gap-8 items-center mx-auto flex flex-col justify-between p-4"
      >
        <div className="text-center">
          <p className="sm:text-5xl text-4xl font-extrabold text-[#9f70fd]">
            Contact Me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
          <div className="space-y-5 self-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={ContactImg}
                alt="contact-iamge"
                className="w-[50%] sm:block hidden mx-auto"
              />
            </motion.div>
          </div>

          <form className="space-y-2 max-w-[450px] self-center bg-[#1a1a1a] p-6 rounded-2xl border border-[#9f70fd]/30 shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-[#292929] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9f70fd]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#292929] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9f70fd]"
            />
            <textarea
              placeholder="Your Message"
              // rows="5"
              className="w-full p-3 bg-[#292929] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9f70fd]"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#9f70fd] to-[#ff6ec7] text-white p-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
            <div className="flex justify-center gap-3 mt-3">
              <Link
                href={"mailto:rohamamajeed4@gmail.com"}
                className="rounded-full border-2 border-[#9f70fd] hover:bg-white hover:text-[#9f70fd] transition-all p-2"
              >
                <Mail />
              </Link>
              <Link
                href={"tel:+923250336309"}
                className="rounded-full border-2 hover:bg-white hover:text-[#9f70fd] transition-all border-[#9f70fd] p-2"
              >
                <Phone />
              </Link>
              <Link
                href={"https://linkedin.com/in/rohama-majeed-213124282"}
                className="rounded-full hover:bg-white hover:text-[#9f70fd] transition-all border-2 border-[#9f70fd] p-2"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href={"https://github.com/Rohama-Majeed7"}
                className="rounded-full hover:bg-white hover:text-[#9f70fd] transition-all border-2 border-[#9f70fd] p-2"
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
