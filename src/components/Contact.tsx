import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with expert IT solutions? 
            Let's discuss your project and find the perfect solution together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select className="w-full px-3 py-2 bg-background border border-input rounded-md">
                    <option>IT Support</option>
                    <option>Custom Programming</option>
                    <option>Cloud Solutions</option>
                    <option>Digital Transformation</option>
                    <option>Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or IT needs..."
                    rows={5}
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose OpteqSolutions?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-primary">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rapid Response</h4>
                    <p className="text-muted-foreground">
                      Quick turnaround times with 24/7 support availability for critical issues.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-secondary">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tailored Solutions</h4>
                    <p className="text-muted-foreground">
                      Custom-built solutions designed specifically for your business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-accent">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Proven Expertise</h4>
                    <p className="text-muted-foreground">
                      Years of experience in IT support and programming across various industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-gradient border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4">Get Started Today</h4>
                <p className="text-muted-foreground mb-4">
                  Free consultation to discuss your IT needs and explore how we can help 
                  optimize your technology infrastructure.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No Obligations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;