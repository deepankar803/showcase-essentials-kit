import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: projectEcommerce,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Express"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/deepankar/ecommerce",
      featured: true,
      date: "2024"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management tool with real-time analytics, post scheduling, and team collaboration features.",
      image: projectSocial,
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "TailwindCSS"],
      liveUrl: "https://social-dashboard.com",
      githubUrl: "https://github.com/deepankar/social-dashboard",
      featured: true,
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with kanban boards, time tracking, and team communication features.",
      image: projectTaskManager,
      technologies: ["React", "Firebase", "Material-UI", "Redux Toolkit"],
      liveUrl: "https://taskmanager-app.com",
      githubUrl: "https://github.com/deepankar/task-manager",
      featured: false,
      date: "2023"
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div 
      className={`project-card animate-fade-in-up ${project.featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {project.date}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button variant="cta" size="sm" asChild>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work that showcases my skills in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
            <Button variant="cta" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Technologies Overview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL", "MongoDB", "Docker", "Next.js", "Express", "GraphQL", "Redux"].map((tech) => (
              <span key={tech} className="tech-badge hover:scale-105 transition-transform">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;