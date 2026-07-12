
import ProjectsContent from "@/components/ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.dev"),

  title: {
    default: "Rohama Majeed | Projects",
    template: "%s | Rohama Majeed",
  },
}
const ProjectsPage = () => {
  

  return (
  <ProjectsContent />
  );
};

export default ProjectsPage;
