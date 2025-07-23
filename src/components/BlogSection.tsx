import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt: "Learn how to structure large React applications for maintainability and performance using the latest best practices and design patterns.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt: "Exploring upcoming trends in web development including AI integration, improved developer tools, and new JavaScript frameworks.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop"
    },
    {
      title: "Optimizing Performance in Full-Stack Applications",
      excerpt: "A comprehensive guide to identifying and fixing performance bottlenecks in both frontend and backend systems.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title gradient-text">
            Latest Articles
          </h2>
          <p className="section-subtitle">
            Insights, tutorials, and thoughts on modern web development and technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="project-card animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;