"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "rohamamajeed4@gmail.com",
    href: "mailto:rohamamajeed4@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    title: "Phone / WhatsApp",
    value: "+92 325 0336309",
    href: "https://wa.me/923250336309",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Pakistan",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohama-majeed-213124282",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/Rohama-Majeed7",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    href: "https://wa.me/923250336309",
  },
];

const ContactContent = () => {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_35px_rgba(79,206,213,0.1)] backdrop-blur-xl min-h-screen px-2 py-3 text-white sm:px-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 px-4 py-2 text-sm font-medium text-[#4fced5]">
            <Sparkles size={16} />
            Contact
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Let’s Work Together
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Have a role, internship, freelance project, or collaboration in
            mind? I’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_30px_rgba(79,206,213,0.08)] backdrop-blur-xl sm:p-6 md:p-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 px-3 py-2 text-sm text-[#4fced5] sm:px-4">
              <MessageCircle size={16} />
              Available for opportunities
            </div>

            <h2 className="mb-3 text-2xl font-bold text-white">
              Contact Information
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-white/65 sm:text-base">
              You can reach me through email, WhatsApp, LinkedIn, or GitHub.
            </p>

            <div className="space-y-4">
              {contactCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.href === "#" ? "_self" : "_blank"}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-3 transition hover:border-[#4fced5]/50 hover:bg-[#4fced5]/10 sm:p-4"
                >
                  <div className="sm:flex hidden  h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4fced5]/10 text-[#4fced5] transition group-hover:bg-[#4fced5] group-hover:text-black">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="break-words text-sm text-white/60">
                      {item.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-white/75 transition hover:border-[#4fced5] hover:text-[#4fced5] sm:px-4"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_30px_rgba(79,206,213,0.08)] backdrop-blur-xl sm:p-6 md:p-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 px-3 py-2 text-sm text-[#4fced5] sm:px-4">
              <Send size={16} />
              Send Message
            </div>

            <h2 className="mb-3 text-2xl font-bold text-white">
              Open to Opportunities
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-white/65 sm:text-base">
              This button opens your email app with a ready message.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-5">
                <h3 className="mb-3 font-semibold text-[#4fced5]">
                  I’m interested in:
                </h3>

                <ul className="space-y-2 text-sm leading-relaxed text-white/70">
                  <li>• Junior Full Stack Developer roles</li>
                  <li>• MERN Stack Developer roles</li>
                  <li>• Frontend Developer roles</li>
                  <li>• QA Engineer roles</li>
                  <li>• Freelance web development projects</li>
                </ul>
              </div>

              <Link
                href="mailto:rohamamajeed4@gmail.com?subject=Work Opportunity&body=Hi Rohama, I visited your portfolio and would like to discuss an opportunity with you."
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4fced5] px-4 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(79,206,213,0.25)] transition hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Email
              </Link>

              <Link
                href="https://wa.me/923250336309"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
              >
                <FaWhatsapp size={18} />
                Message on WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactContent;