
import ResumeContent from "@/components/ResumeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rohama | Resume",
  description: "Generated by create next app",
};
const ResumePage = () => {
  return (
   <ResumeContent/>
  );
};

export default ResumePage;
