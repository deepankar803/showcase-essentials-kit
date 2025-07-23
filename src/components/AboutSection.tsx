import { Button } from "./ui/button";
import { Download, Code2, Rocket, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, experience, and what drives my passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with 3+ years of experience creating 
                digital solutions that make a difference. I specialize in building scalable 
                web applications using modern technologies like React, Node.js, and TypeScript.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or hiking in nature. I believe that great software is built 
                by teams that care about both the users and the craft.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="cta">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline">
                View Projects
              </Button>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className="text-muted-foreground text-sm">
                Writing maintainable, efficient code that stands the test of time
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                Constantly learning new technologies and pushing boundaries
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">User-Centric</h4>
              <p className="text-muted-foreground text-sm">
                Building solutions that truly solve real-world problems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;