import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MianHeader from "@/components/MianHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.me"),

  title: {
    default: "Rohama Majeed | Full Stack MERN Developer",
    template: "%s | Rohama Majeed",
  },

  description:
    "Rohama Majeed is a Full Stack MERN Developer skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and QA testing.",

  keywords: [
    "Rohama Majeed",
    "Rohama",
    "Rohama portfolio",
    "Rohama Majeed portfolio",
    "Full Stack MERN Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "QA Engineer",
    "Software Engineer",
  ],

  authors: [{ name: "Rohama Majeed" }],
  creator: "Rohama Majeed",
  publisher: "Rohama Majeed",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Rohama Majeed | Full Stack MERN Developer",
    description:
      "Portfolio of Rohama Majeed, a Full Stack MERN Developer skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and QA testing.",
    url: "https://rohama-majeed.me",
    siteName: "Rohama Majeed Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rohama Majeed | Full Stack MERN Developer",
    description:
      "Portfolio of Rohama Majeed, a Full Stack MERN Developer skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and QA testing.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#050b0f] text-white antialiased`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#4fced5]/20 blur-[100px]" />
          <div className="absolute bottom-[-160px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#4fced5]/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,206,213,0.08),transparent_35%)]" />
        </div>

        <main className="mx-auto min-h-screen w-full max-w-7xl sm:px-4 px-2 py-4 sm:px-6 lg:px-8">
          <MianHeader />

          <div className="mt-5">{children}</div>
        </main>
      </body>
    </html>
  );
}