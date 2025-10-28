import { GraduationCap, Code, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate about technology and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">
              BTech in Computer Science & Engineering
            </p>
            <p className="text-primary font-medium">Parul University</p>
            <p className="text-sm text-muted-foreground">2022 - 2026</p>
          </div>

          {/* Skills Focus Card */}
          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in [animation-delay:100ms]">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Technical Focus</h3>
            <p className="text-muted-foreground">
              MERN Stack Development
            </p>
            <p className="text-primary font-medium">C++ | DSA | OOP</p>
            <p className="text-sm text-muted-foreground">Front-end & Full Stack</p>
          </div>

          {/* Passion Card */}
          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in [animation-delay:200ms]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-muted-foreground">
              Building elegant, scalable solutions
            </p>
            <p className="text-primary font-medium">Problem Solver</p>
            <p className="text-sm text-muted-foreground">Always learning & growing</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border animate-fade-in [animation-delay:300ms]">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              As a BTech Computer Science student at Parul University, I'm driven by a passion
              for creating meaningful digital experiences. My journey in tech has been fueled by
              curiosity and a constant desire to tackle complex challenges.
            </p>
            <p>
              I specialize in the <span className="text-primary font-semibold">MERN stack</span>,
              crafting robust full-stack applications with{" "}
              <span className="text-primary font-semibold">React.js</span> for dynamic frontends,{" "}
              <span className="text-primary font-semibold">Node.js</span> and{" "}
              <span className="text-primary font-semibold">Express</span> for scalable backends, and{" "}
              <span className="text-primary font-semibold">MongoDB</span> for efficient data management.
            </p>
            <p>
              Beyond web development, I have strong foundations in{" "}
              <span className="text-secondary font-semibold">C++</span>, with expertise in{" "}
              <span className="text-secondary font-semibold">Data Structures & Algorithms</span> and{" "}
              <span className="text-secondary font-semibold">Object-Oriented Programming</span>.
              This combination allows me to approach problems with both technical depth and creative solutions.
            </p>
            <p>
              I believe in continuous learning and pushing boundaries. Every project is an
              opportunity to grow technically and personally, and I'm always excited to take on
              new challenges that help me become a better developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
