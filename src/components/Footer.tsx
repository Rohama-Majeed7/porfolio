"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className=" px-4 py-2 w-full bg-[#0a0a0a] border-t border-[#9f70fd] fixed bottom-0">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm md:text-base text-[#a1a1aa]">
          Made with 💖 by{" "}
          <span className="bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] bg-clip-text text-transparent font-semibold">
            Rohama Majeed
          </span>{" "}
          | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
