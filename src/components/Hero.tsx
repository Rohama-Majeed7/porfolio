"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, LinkedinIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import BlinkText from "./BlinkText";
import { FileUser } from "lucide-react";

const Hero = () => {



  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" bg-[#26333a] border-2 border-[#4fced5] shadow-[0_0_7px_#4fced5] sm:rounded-lg relative h-fit md:h-full "
    >
      <Image
        src={"/mern.png"}
        height={50}
        width={100}
        className="w-full bg-[#000000c0] opacity-60 h-[200px] object-cover sm:rounded-t-lg rounded-b-0  "
        alt="mern"
      />
      <Image
        src={"/my2img.png"}
        height={100}
        width={100}
        alt="myimg"
        className="p-1 absolute top-[35%] left-[35%] md:top-[30%] md:left-[35%] rounded-full border-2 border-[#50ced6]"
      />
      <div className="flex flex-col mt-[60px] gap-4 items-center justify-center p-2">
        <div className="flex flex-col gap-1 items-center">
          <p className="font-bold text-white">Rohama Majeed</p>
          <BlinkText />
        </div>
        <div className="flex justify-center gap-3">
          <Link
            href={"mailto:rohamamajeed4@gmail.com"}
            className="bg-[#1a2328] h-10 w-10 rounded-lg text-white hover:text-[#50ced6] hover:bg-white  transition-all p-2"
          >
            <Mail className="text-sm" />
          </Link>
          <Link
            href={"tel:+923250336309"}
            className="bg-[#1a2328] h-10 w-10 rounded-lg text-white hover:text-[#50ced6] hover:bg-white  transition-all p-2"
          >
            <Phone />
          </Link>
          <Link
            href={"https://linkedin.com/in/rohama-majeed-213124282"}
            className="bg-[#1a2328] h-10 w-10 rounded-lg text-white hover:text-[#50ced6] hover:bg-white  transition-all p-2"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href={"https://github.com/Rohama-Majeed7"}
            className="bg-[#1a2328] h-10 w-10 rounded-lg text-white hover:text-[#50ced6] hover:bg-white  transition-all p-2"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="md:absolute bottom-0 w-full">
        <div className="flex justify-between items-center">
          <Link
            href={"/myResume/Rohama-Resume-2025.pdf"}
            className="underline px-4 py-3 text-[#50ced6]"
          >
            My Resume
          </Link>
          <FileUser className="text-white" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
