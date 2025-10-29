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
    "A full-stack blog platform where users can create, edit, and delete posts with authentication, rich text editing, and seamless data management.",
  tags: ["React", "Node.js", "MongoDB", "Express"],
  github: "https://github.com/prachipatilcloud",
  demo: "#",
},
{
  title: "Expense Tracker",
  description:
    "A web application that helps users track their income and expenses, visualize spending patterns, and manage budgets effectively with interactive charts.",
  tags: ["React", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/prachipatilcloud",
  demo: "https://expense-tracker-me4v290lc-prachipatilclouds-projects.vercel.app",
},
{
  title: "Notes App",
  description:
    "A simple and intuitive notes management application that allows users to create, edit, delete, and organize their notes efficiently with a clean and responsive UI.",
  tags: ["React", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/prachipatilcloud",
  demo: "https://notecrafts.netlify.app/",
}

];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Showcasing my work and problem-solving approach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 text-xs sm:text-sm"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 animate-fade-in [animation-delay:600ms]">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base"
            asChild
          >
            <a
              href="https://github.com/prachipatilcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
