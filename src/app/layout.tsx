// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MianHeader from "@/components/MianHeader";
import Hero from "@/components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohama — Portfolio",
  description: "Full-Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          h-screen
          sm:py-
      overflow-x-hidden
      sm:overflow-y-hidden
      overflow-y-scroll
          bg-[#07141b]
        `}
      >
        {/* BACKGROUND */}
        <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* WRAPPER */}
        <div className="relative z-10 flex mx-auto h-full items-center justify-center p-2">

          <section
            className="
              w-full max-w-[1250px]
              h-full
              flex flex-col lg:flex-row
              bg-white/5
              border border-white/10
              rounded-[20px]
              
              shadow-[0_10px_60px_rgba(0,0,0,0.45)]
            "
          >

            {/* ========================= */}
            {/* LEFT SIDE (HERO + HEADER MOBILE) */}
            {/* ========================= */}
            <div className="w-full lg:w-[32%] flex flex-col ">

              {/* MOBILE HEADER (ONLY MOBILE/TABLET) */}
              <div className="lg:hidden bg-[#0f1b22] border-b border-white/10 p-2 shrink-0">
                <MianHeader />
              </div>

              {/* HERO (NO FIXED HEIGHT ❌ FIXED) */}
              <div className="my-auto p-2">
                <Hero />
              </div>
            </div>

            {/* ========================= */}
            {/* RIGHT SIDE (DESKTOP HEADER + CONTENT) */}
            {/* ========================= */}
            <div className="w-full lg:w-[68%] h-full flex flex-col">

              {/* DESKTOP HEADER */}
              <div className="hidden lg:block   p-2 shrink-0">
                <MianHeader />
              </div>

              {/* CONTENT */}
              <div className="flex-1 overflow-y-auto scrollable p-3 sm:p-4 md:p-5">
                {children}
              </div>

            </div>

          </section>

        </div>
      </body>
    </html>
  );
}