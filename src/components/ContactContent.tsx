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
    <section className="min-h-screen sm:px-4 sm:py-8 px-2 py-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-[#4fced5]">Contact</p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Let’s Work Together
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Have a role, internship, freelance project, or collaboration in
            mind? I’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] sm:p-6 p-3 md:p-8"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 sm:px-4 px-2 py-2 text-sm text-[#4fced5]">
              <MessageCircle size={16} />
              Available for opportunities
            </div>

            <h2 className="mb-3 text-2xl font-bold">Contact Information</h2>

            <p className="mb-6 text-white/65">
              You can reach me through email, WhatsApp, LinkedIn, or GitHub.
            </p>

            <div className="space-y-4">
              {contactCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.href === "#" ? "_self" : "_blank"}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 sm:p-4 p-2.5 transition hover:border-[#4fced5] hover:bg-[#4fced5]/10"
                >
                  <div className="sm:flex hidden h-11 w-11 items-center justify-center rounded-xl bg-[#4fced5]/10 text-[#4fced5]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.value}</p>
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
                  className="flex items-center gap-2 rounded-xl border border-white/10 sm:px-4 px-2 py-2 text-sm transition hover:border-[#4fced5] hover:text-[#4fced5]"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] sm:p-6 p-3 md:p-8"
          >
            <h2 className="mb-3 text-2xl font-bold">Send Message</h2>

            <p className="mb-6 text-white/65">
              This button opens your email app with a ready message.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 sm:p-5 p-2.5">
                <h3 className="mb-2 font-semibold text-[#4fced5]">
                  I’m interested in:
                </h3>

                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Junior Full Stack Developer roles</li>
                  <li>• MERN Stack Developer roles</li>
                  <li>• Frontend Developer roles</li>
                  <li>• QA Engineer roles</li>
                  <li>• Freelance web development projects</li>
                </ul>
              </div>

              <Link
                href="mailto:rohamamajeed4@gmail.com?subject=Work Opportunity&body=Hi Rohama, I visited your portfolio and would like to discuss an opportunity with you."
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4fced5] sm:px-5 px-2.5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Email
              </Link>

              <Link
                href="https://wa.me/923250336309"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 sm:px-5 p-2.5 py-3 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
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