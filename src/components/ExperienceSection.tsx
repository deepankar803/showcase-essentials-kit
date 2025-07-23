import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      duration: "2023 - Present",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 100K+ users",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and established coding best practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "TypeScript"]
    },
    {
      company: "StartupXYZ", 
      role: "Full Stack Developer",
      location: "Remote",
      duration: "2022 - 2023",
      type: "Full-time",
      achievements: [
        "Built complete e-commerce platform from scratch using React and Node.js",
        "Integrated payment systems and third-party APIs",
        "Collaborated with design team to create responsive user interfaces",
        "Participated in agile development process and sprint planning"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "Redux", "Jest"]
    },
    {
      company: "Digital Agency Inc",
      role: "Frontend Developer",
      location: "New York, NY",
      duration: "2021 - 2022", 
      type: "Full-time",
      achievements: [
        "Developed responsive websites for 20+ clients across various industries",
        "Improved website loading speeds by 50% through optimization techniques",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Maintained and updated existing client websites"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "Sass"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      location: "California, USA",
      duration: "2017 - 2021",
      gpa: "3.8/4.0",
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Club",
        "Dean's List for 6 consecutive semesters"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background in software development
          </p>
        </div>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold mb-12 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-primary mb-1">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">Education</h3>
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary mb-1">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <Building2 className="h-4 w-4" />
                    {edu.institution}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <span className="bg-success/10 text-success px-2 py-1 rounded text-xs">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Achievements:</h5>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1.5">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;