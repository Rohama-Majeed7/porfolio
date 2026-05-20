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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          bg-[#07141b]
          relative
          overflow-x-hidden
        `}
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-120px] left-[-120px] h-[250px] sm:h-[320px] w-[250px] sm:w-[320px] rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] h-[250px] sm:h-[320px] w-[250px] sm:w-[320px] rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* MAIN WRAPPER */}
        {/* MAIN WRAPPER */}
        <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-3 lg:p-2">
          <section
            className="
      relative

      w-full
      max-w-[1250px]

      min-h-screen
      sm:min-h-[95vh]

      lg:h-[92vh]
      lg:max-h-[760px]

      flex
      flex-col

      rounded-[20px]
      sm:rounded-[30px]

      border
      border-white/10

      bg-white/5
      backdrop-blur-2xl

      shadow-[0_10px_60px_rgba(0,0,0,0.45)]

      p-2.5
      sm:p-4
      lg:p-5

      overflow-hidden
    "
          >
            {/* INNER OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"></div>

            {/* MOBILE HEADER */}
            <div className="block lg:hidden mb-2 shrink-0">
              <div
                className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          shadow-lg
          p-2
        "
              >
                <MianHeader />
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 flex-1 min-h-0">

              {/* HERO SIDE */}
              <div
                className="
          w-full

          min-h-[450px]
          sm:min-h-[520px]
          md:min-h-[620px]

          lg:min-h-0
          lg:h-full
          lg:w-[32%]
          xl:w-[28%]

          flex
          items-center
          justify-center
        "
              >
                <div
                  className="
            w-full
            h-full
            rounded-[20px]
            overflow-hidden
          "
                >
                  <Hero />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <main
                className="
          w-full

          lg:w-[68%]
          xl:w-[72%]

          flex
          flex-col
          gap-2.5

          min-h-0
        "
              >
                {/* DESKTOP HEADER */}
                <div className="hidden lg:block shrink-0">
                  <div
                    className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              shadow-lg
              p-2
            "
                  >
                    <MianHeader />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="
            flex-1
            h-full

            rounded-3xl
            border
            border-white/10

            bg-[#0f1b22]/70
            backdrop-blur-xl

            shadow-inner

            p-3
            sm:p-4
            md:p-5

            overflow-y-auto

            scrollbar-thin
            scrollbar-thumb-cyan-500/40
            scrollbar-track-transparent
          "
                >
                  {children}
                </div>
              </main>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}