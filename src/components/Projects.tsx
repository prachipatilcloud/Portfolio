import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with MERN stack.",
  //   tags: ["React", "Node.js", "MongoDB", "Express"],
  //   github: "https://github.com/prachipatilcloud",
  //   demo: "#",
  // },
  {
  title: "Home Utility Management System",
  description:
    "A comprehensive system to manage household utilities efficiently, track bills, schedule maintenance, and monitor usage patterns.",
  tags: ["React", "Firebase", "Tailwind CSS"],
  github: "https://github.com/prachipatilcloud",
  // demo: "#",
  },
  {
  title: "Blog Application",
  description:
    "A full-stack blog platform where users can create, edit, and delete posts with authentication, rich text editing, and seamless data management.",
  tags: ["React", "Node.js", "MongoDB", "Express"],
  github: "https://github.com/prachipatilcloud",
  demo: "https://blog-application-five-sooty.vercel.app/",
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
},
{
  title: "Photostat App",
  description:
    "Photostat is a photography portfolio that showcases model photoshoots and creative visual collections in a clean and modern layout.",
  tags: ["React", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/prachipatilcloud/Photostat",
  demo: "https://prachipatilcloud.github.io/Photostat/",
}

];

const Projects = () => {
  const isMobile = useIsMobile();

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Showcasing my work and problem-solving approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-sm leading-relaxed min-h-[3rem] sm:min-h-[3.5rem]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-2.5 md:px-3 py-1 text-xs sm:text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`flex gap-2 sm:gap-3 ${isMobile ? 'flex-col' : 'flex-row'}`}>
                <Button
                  variant="outline"
                  size={isMobile ? "default" : "sm"}
                  className="flex-1 border-primary text-primary hover:bg-primary/10 text-xs sm:text-sm font-medium min-h-[2.5rem] sm:min-h-[2rem]"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">Code</span>
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    size={isMobile ? "default" : "sm"}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-medium min-h-[2.5rem] sm:min-h-[2rem]"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">Demo</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 animate-fade-in [animation-delay:600ms]">
          <Button
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base font-medium px-6 py-3 sm:px-8 sm:py-4"
            asChild
          >
            <a
              href="https://github.com/prachipatilcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">View All Projects on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
