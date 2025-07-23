import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/deepankar", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/deepankar", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/deepankar", label: "Twitter" },
    { icon: Mail, href: "mailto:deepankar@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Deepankar.dev
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about creating elegant solutions 
              to complex problems. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>deepankar@example.com</div>
              <div>+1 (555) 123-4567</div>
              <div>San Francisco, CA</div>
            </div>
            <Button 
              variant="cta" 
              size="sm" 
              className="mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Deepankar. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;