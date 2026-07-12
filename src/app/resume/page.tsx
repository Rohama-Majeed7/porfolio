
import ResumeContent from "@/components/ResumeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.dev"),

  title: {
    default: "Rohama Majeed | Resume",
    template: "",
  },
}
const ResumePage = () => {
  return (
   <ResumeContent/>
  );
};

export default ResumePage;
