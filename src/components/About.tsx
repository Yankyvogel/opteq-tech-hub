import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const technologies = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Cloud Platforms", level: 82 },
    { name: "DevOps", level: 80 }
  ];

  const stats = [
    { label: "Years in Business", value: "5+" },
    { label: "Satisfied Clients", value: "50+" },
    { label: "Projects Delivered", value: "100+" },
    { label: "Support Response", value: "<1hr" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">OpteqSolutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a dedicated team of IT professionals specializing in comprehensive 
              technology solutions. From troubleshooting your daily IT challenges to 
              building custom software applications, we bring expertise and reliability 
              to every project.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with reliable IT solutions and custom software 
                    that drives growth and efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-secondary text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">
                    We combine technical expertise with personalized service to deliver 
                    solutions that perfectly fit your business needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Technical Expertise</h3>
                <div className="space-y-6">
                  {technologies.map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;