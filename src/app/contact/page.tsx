
import ContactContent from "@/components/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.dev"),

  title: {
    default: "Rohama Majeed | Contact",
    template: "%s | Rohama Majeed",
  },
}
const Contact = () => {
  return (
    <ContactContent />
  );
};

export default Contact;
