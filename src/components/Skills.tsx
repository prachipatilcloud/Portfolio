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
      { name: "TypeScript", level: 75 },
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
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Constantly learning and improving my tech stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
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
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 animate-fade-in [animation-delay:600ms]">
          <h3 className="text-2xl font-bold mb-4 text-center">MERN Stack Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
              <div
                key={tech}
                className="text-center p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
              >
                <p className="font-semibold text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
