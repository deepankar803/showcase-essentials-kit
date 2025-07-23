import { Button } from "./ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto text-center text-primary-foreground relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 floating-element">
            <div className="relative inline-block">
              <img
                src={heroPortrait}
                alt="Deepankar - Full Stack Developer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary-foreground/20 shadow-2xl transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 animate-glow"></div>
              <div className="absolute -top-2 -right-2">
                <Code2 className="h-8 w-8 text-yellow-300 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            Hi, I'm <span className="gradient-text animate-glow">Deepankar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-primary-foreground/90 animate-slide-in-left">
            Full Stack Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            I build fast, scalable, and elegant web applications that solve real-world problems. 
            Passionate about creating exceptional user experiences with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToProjects}
              className="bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-110 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 animated-bg"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white hover:scale-110 bg-transparent transition-all duration-300 animated-bg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToContact}
              className="bg-yellow-300 text-primary hover:bg-yellow-400 hover:scale-110 transition-all duration-300 animated-bg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:deepankar@example.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
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