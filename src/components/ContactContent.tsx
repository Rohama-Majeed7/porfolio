"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, Github, MessageCircle } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const ContactContent = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.EMAIL_SERVICE_ID || "service_zozv02m",
        process.env.EMAIL_TEMPLATE_ID || "template_g1m4nto",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.EMAIL_PUBLIC_KEY || "Qu42F9KzJO__3ns8y"
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section className="h-full w-full rounded-2xl bg-[#1b262c] border border-[#4fced5]/40 shadow-[0_0_15px_rgba(79,206,213,0.15)] overflow-hidden">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col h-full p-3 sm:p-5 gap-5"
      >
        {/* HEADER */}
        <div>
          <p className="text-xl sm:text-2xl font-bold text-white">
            Contact <span className="text-[#4fced5]">Me</span>
          </p>
          <div className="h-1 w-16 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">

          {/* LEFT CARD - CONTACT INFO */}
          <div className="space-y-4">

            {/* Email Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#4fced5]/50 transition">
              <div className="flex items-center gap-2 text-[#4fced5] font-semibold">
                <Mail size={18} />
                Email
              </div>
              <p className="text-white text-sm mt-2">
                rohamamajeed4@gmail.com
              </p>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#4fced5]/50 transition">
              <div className="flex items-center gap-2 text-[#4fced5] font-semibold">
                <Phone size={18} />
                Phone / WhatsApp
              </div>
              <p className="text-white text-sm mt-2">
                +92 325 0336309
              </p>

              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/923250336309?text=Hello%20I%20want%20to%20connect"
                target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg transition"
              >
                <MessageCircle size={16} />
                WhatsApp Me
              </Link>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 hidden lg:flex">
              {[
                { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
                { icon: <Github size={18} />, href: "https://github.com" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-[#4fced5] hover:text-black transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* CENTER - FORM */}
          <div className=" flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full h-fit max-w-xl space-y-3 bg-white/5 border border-white/10 rounded-2xl p-5 shadow-md"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2.5 rounded-xl bg-black/20 text-white border border-white/10 focus:border-[#4fced5] outline-none"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2.5 rounded-xl bg-black/20 text-white border border-white/10 focus:border-[#4fced5] outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full p-2.5 rounded-xl bg-black/20 text-white border border-white/10 focus:border-[#4fced5] outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#4fced5] text-black font-semibold hover:scale-[1.02] transition"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-center text-sm">
                  Message sent successfully ✅
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.main>
    </section>
  );
};

export default ContactContent;