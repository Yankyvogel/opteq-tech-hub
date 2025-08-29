import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "IT Support & Maintenance",
      description: "24/7 technical support, system maintenance, and infrastructure management to keep your business running smoothly.",
      features: ["Network Management", "System Updates", "Security Monitoring", "Remote Support"],
      icon: "🛠️"
    },
    {
      title: "Custom Programming",
      description: "Tailored software solutions using Python, JavaScript, and modern frameworks to meet your specific business needs.",
      features: ["Web Applications", "API Development", "Database Design", "Automation Scripts"],
      icon: "💻"
    },
    {
      title: "Cloud Solutions",
      description: "Modern cloud infrastructure setup, migration services, and ongoing management for scalable business growth.",
      features: ["Cloud Migration", "Infrastructure Setup", "Security Configuration", "Performance Optimization"],
      icon: "☁️"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive technology consulting to modernize your business processes and improve operational efficiency.",
      features: ["Process Analysis", "Technology Strategy", "Implementation Planning", "Training & Support"],
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your business operations 
            and accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-border hover-lift group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;