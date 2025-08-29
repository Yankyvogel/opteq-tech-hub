import { Button } from "@/components/ui/button";
import opteqLogo from "@/assets/opteq-logo.png";

const Header = () => {
  console.log("Header rendering with logo:", opteqLogo);
  
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={opteqLogo} 
              alt="OpteqSolutions Logo" 
              className="h-10 w-auto"
              onError={(e) => console.log("Logo failed to load:", e)}
              onLoad={() => console.log("Logo loaded successfully")}
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="hero" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;