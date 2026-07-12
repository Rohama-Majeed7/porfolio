
import AboutContent from "@/components/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.dev"),

  title: {
    default: "Rohama Majeed | About",
    template: "%s | Rohama Majeed",
  },
}

const About = () => {
  return (
    <AboutContent />
  );
};

export default About;
