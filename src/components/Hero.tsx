import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="text-gradient block">IT Solutions</span>
              for Your Business
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert IT support and custom programming services. From Python to JavaScript, 
              we deliver comprehensive technology solutions that drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional IT workspace with modern technology setup"
                className="rounded-2xl shadow-2xl hover-lift animate-float"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full animate-glow opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full animate-glow opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;