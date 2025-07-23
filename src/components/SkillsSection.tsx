import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", 
        "Tailwind CSS", "Sass", "JavaScript", "Redux", "Zustand"
      ]
    },
    {
      title: "Backend", 
      skills: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI", 
        "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Firebase", "Supabase",
        "Jest", "Cypress", "Webpack", "Vite", "Linux", "Nginx"
      ]
    },
    {
      title: "Design & Other",
      skills: [
        "Figma", "Adobe XD", "UI/UX Design", "Responsive Design",
        "Agile", "Scrum", "CI/CD", "DevOps", "Testing", "SEO"
      ]
    }
  ];

  const proficiencyLevels = [
    { skill: "JavaScript/TypeScript", level: 95 },
    { skill: "React/Next.js", level: 90 },
    { skill: "Node.js/Express", level: 85 },
    { skill: "Python/Django", level: 80 },
    { skill: "Database Design", level: 85 },
    { skill: "DevOps/Cloud", level: 75 }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-12">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyLevels.map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">AWS Certified Developer</div>
              <div className="text-sm text-muted-foreground">Amazon Web Services - 2024</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">React Professional</div>
              <div className="text-sm text-muted-foreground">Meta/Facebook - 2023</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">Full Stack Developer</div>
              <div className="text-sm text-muted-foreground">freeCodeCamp - 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;