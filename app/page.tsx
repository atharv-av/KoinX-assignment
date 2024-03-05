import Navbar from "./components/Navbar";
import MobileNavigation from "./components/MobileNavigation";
import TradingWidget from "./components/TradingWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavigation />
      <div className="bg-[#eff2f5] h-screen px-8 py-6">
        <TradingWidget />
      </div>
    </>
  );
}
