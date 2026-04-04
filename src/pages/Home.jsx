import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MenuCarousel from "../components/MenuCarousel";
import FlavorSection from "../components/FlavorSection";
import WorkWithUs from "../components/WorkWithUs";
import FindUs from "../components/FindUs";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuCarousel />
      <FlavorSection />
      <WorkWithUs />
      <FindUs />
      <PhotoGrid />
      <Footer />
    </div>
  );
}