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
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex items-center justify-center bg-gradient-to-b from-[#326E7D] to-[#1E2F39]`}
      >
        <section className="h-full md:h-[550px] w-full max-w-[1150px] mx-auto flex gap-2 md:flex-row flex-col p-1 md:p-3 sm:rounded-lg  bg-[#1a2328]">
            <div className="md:w-[30%] w-full">
              <Hero />
            </div>
            <main className="md:w-[70%] w-full flex flex-col gap-2">
              <MianHeader />
              {children}
            </main>
        </section>
      </body>
    </html>
  );
}
