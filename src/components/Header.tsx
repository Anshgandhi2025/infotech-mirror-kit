import { Button } from "@/components/ui/button";
import { CalendarDays, Menu } from "lucide-react";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="bg-orange hover:bg-orange text-white"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </Button>
          <Button 
            className="bg-orange hover:bg-orange text-white"
            onClick={() => setIsSignUpOpen(true)}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              <Button 
                variant="ghost" 
                className="bg-orange hover:bg-orange text-white justify-start"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
              <Button 
                className="bg-orange hover:bg-orange text-white justify-start"
                onClick={() => setIsSignUpOpen(true)}
              >
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </header>
  );
};

export default Header;