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
        <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4 lg:p-6">
          <section
            className="
              w-full
              max-w-[1250px]

              /* MOBILE */
              min-h-screen
              sm:min-h-[95vh]

              /* DESKTOP */
              lg:h-[92vh]
              lg:max-h-[760px]

              flex
              flex-col
              lg:flex-row

              gap-4

              rounded-[24px]
              sm:rounded-[30px]

              border
              border-white/10

              bg-white/5
              backdrop-blur-2xl

              shadow-[0_10px_60px_rgba(0,0,0,0.45)]

              p-3
              sm:p-4
              lg:p-5

              overflow-hidden
            "
          >
            {/* INNER OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"></div>

            {/* HERO SIDE */}
            <div
              className="
                w-full

                /* MOBILE HEIGHT */
                min-h-[520px]

                /* TABLET */
                md:min-h-[620px]

                /* DESKTOP */
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
                  rounded-[24px]
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

                /* DESKTOP WIDTH */
                lg:w-[68%]
                xl:w-[72%]

                flex
                flex-col
                gap-2

                /* FIX MOBILE OVERFLOW */
                min-h-0
              "
            >
              {/* HEADER */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  shadow-lg
                  p-2
                  shrink-0
                "
              >
                <MianHeader />
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
          </section>
        </div>
      </body>
    </html>
  );
}