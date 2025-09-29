import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import CommunitySection from "@/components/CommunitySection";
import GetInTouchSection from "@/components/GetInTouchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <InnovationSection />
      <CommunitySection />
      <GetInTouchSection />
    </div>
  );
};

export default Index;
