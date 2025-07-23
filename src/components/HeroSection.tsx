import { Button } from "./ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 hero-gradient">
      <div className="container mx-auto text-center text-primary-foreground">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={heroPortrait}
              alt="Deepankar - Full Stack Developer"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary-foreground/20 shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Deepankar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-primary-foreground/90">
            Full Stack Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed">
            I build fast, scalable, and elegant web applications that solve real-world problems. 
            Passionate about creating exceptional user experiences with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToProjects}
              className="bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105 shadow-lg hover:shadow-emerald-500/30"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white hover:scale-105 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToContact}
              className="bg-yellow-300 text-primary hover:bg-yellow-400"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:deepankar@example.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;