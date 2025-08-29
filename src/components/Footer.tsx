const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-muted/40 to-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold text-gradient">OpteqSolutions</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional IT support and custom programming services to empower your business 
              with reliable technology solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover-lift cursor-pointer">
                <span className="text-primary">📧</span>
              </div>
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover-lift cursor-pointer">
                <span className="text-secondary">📱</span>
              </div>
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover-lift cursor-pointer">
                <span className="text-accent">💼</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">IT Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 OpteqSolutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;