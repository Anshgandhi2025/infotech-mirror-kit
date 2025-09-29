import { Button } from "@/components/ui/button";
import { CalendarDays, Users, Zap, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-bg flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-12">
          <span className="text-foreground">Discover Upcoming</span>
          <br />
          <span className="text-orange">Department Events</span>
        </h1>

        {/* Floating Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="w-12 h-12 bg-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <CalendarDays className="w-6 h-6 text-orange" />
          </div>
          <div className="w-12 h-12 bg-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-orange" />
          </div>
          <div className="w-12 h-12 bg-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-orange" />
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stay updated with workshops, hackathons, and fests. Join your community
          and never miss an opportunity to learn and grow.
        </p>

        <div className="flex items-center justify-center space-x-6">
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg"
          >
            View Events
          </Button>
          
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-live rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Live events updating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;