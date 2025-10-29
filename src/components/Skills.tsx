import { Code2, Database, Layout, Server, Terminal, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    color: "primary",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "secondary",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication", level: 78 },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "primary",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    color: "secondary",
    skills: [
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Core Concepts",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Data Structures", level: 82 },
      { name: "Algorithms", level: 80 },
      { name: "OOP Concepts", level: 85 },
      { name: "Problem Solving", level: 88 },
    ],
  },
  {
    title: "Additional Skills",
    icon: Zap,
    color: "secondary",
    skills: [
      { name: "Debugging", level: 85 },
      { name: "Code Review", level: 80 },
      { name: "Team Collaboration", level: 82 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Constantly learning and improving my tech stack
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${
                            category.color === "primary"
                              ? "from-primary to-primary/70"
                              : "from-secondary to-secondary/70"
                          } rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 animate-fade-in [animation-delay:600ms]">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">MERN Stack Expertise</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
              <div
                key={tech}
                className="text-center p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
              >
                <p className="font-semibold text-sm sm:text-base lg:text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
