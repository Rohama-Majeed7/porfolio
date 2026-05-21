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
          min-h-screen
          overflow-x-hidden
          bg-[#07141b]
          lg:flex
          lg:items-center
          lg:justify-center
        `}
      >
        {/* BACKGROUND BLUR */}
        <div className="fixed top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div className="fixed bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

        {/* MAIN CONTAINER */}
        <section
          className="
            relative
            w-screen
            lg:w-full
            max-w-[1200px]

            min-h-screen
            lg:h-[95vh]
bg-[#1b262c]/90
backdrop-blur-md

            flex
            flex-col
            lg:flex-row
            md:border
            md:border-white/10
            md:rounded-[20px]
            md:shadow-[0_10px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* ========================= */}
          {/* LEFT SIDE */}
          {/* ========================= */}
          <div className="w-full lg:w-[32%] flex flex-col">
            {/* MOBILE HEADER */}
            <div className="lg:hidden p-2 shrink-0">
              <MianHeader />
            </div>

            {/* HERO */}
            <div className="p-2 lg:flex lg:m-auto lg:items-center">
              <Hero />
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}
          <div className="w-full lg:w-[68%] flex flex-col min-w-0">
            {/* DESKTOP HEADER */}
            <div className="hidden lg:block p-2 shrink-0">
              <MianHeader />
            </div>

            {/* PAGE CONTENT */}
            <div
              className="
                flex-1
                overflow-y-auto
                overflow-x-hidden
                scrollable
                min-w-0

                p-3
                sm:p-4
                md:p-5
              "
            >
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}