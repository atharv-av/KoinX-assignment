import Navbar from "../components/Navbar";
import MobileNavigation from "../components/MobileNavigation";
import MainContent from "../components/MainContent";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavigation />
      <MainContent />
      <Footer />
      <MobileFooter />
    </>
  );
}
