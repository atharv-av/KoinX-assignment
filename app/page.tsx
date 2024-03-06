import Navbar from "../components/Navbar";
import MobileNavigation from "../components/MobileNavigation";
import MainContent from "../components/MainContent";
import TradingWidget from "../components/TradingWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavigation />
      <MainContent />
    </>
  );
}
