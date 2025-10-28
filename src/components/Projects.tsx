import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/prachipatilcloud",
    demo: "#",
  },
  {
  title: "Home Utility Management System",
  description:
    "A comprehensive system to manage household utilities efficiently, track bills, schedule maintenance, and monitor usage patterns.",
  tags: ["React", "Firebase", "Tailwind CSS"],
  github: "https://github.com/prachipatilcloud",
  demo: "#",
  },
  {
    title: "Blog Application",
    description:
      "Interactive weather application displaying current conditions, forecasts, and historical data with beautiful visualizations.",
    tags: ["React", "REST API", "Charts.js"],
    github: "https://github.com/prachipatidar04",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "Dynamic portfolio website generator allowing users to create professional portfolios using customizable templates and themes.",
    tags: ["React", "TypeScript", "CSS"],
    github: "https://github.com/prachipatidar04",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with interactive charts, data visualization, and export functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/prachipatidar04",
    demo: "#",
  },
  {
    title: "Recipe Finder App",
    description:
      "Recipe search and discovery platform with filters, favorites, and meal planning features. Integrated with external recipe API.",
    tags: ["React", "API Integration", "CSS"],
    github: "https://github.com/prachipatidar04",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my work and problem-solving approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in [animation-delay:600ms]">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a
              href="https://github.com/prachipatidar04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
