import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
            <CalendarDays className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">CEC</div>
            <div className="text-xs text-muted-foreground">Events Portal</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground hover:text-orange">
            Login
          </Button>
          <Button className="bg-orange hover:bg-orange/90 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;