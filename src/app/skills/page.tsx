import SkillsContent from "@/components/SkillsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.dev"),

  title: {
    default: "Rohama Majeed | Skills",
    template: "",
  },
}

const Skills = () => {
  return <SkillsContent />;
};

export default Skills;
