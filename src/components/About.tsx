import { GraduationCap, Code, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Passionate about technology and continuous learning
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Education Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              BTech in Computer Science & Engineering
            </p>
            <p className="text-primary font-medium text-sm sm:text-base">Parul University</p>
            <p className="text-xs sm:text-sm text-muted-foreground">2022 - 2026</p>
          </div>

          {/* Skills Focus Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in [animation-delay:100ms]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 sm:mb-4">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Technical Focus</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              MERN Stack Development
            </p>
            <p className="text-primary font-medium text-sm sm:text-base">C++ | DSA | OOP</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Front-end & Full Stack</p>
          </div>

          {/* Passion Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in [animation-delay:200ms] sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Passion</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Building elegant, scalable solutions
            </p>
            <p className="text-primary font-medium text-sm sm:text-base">Problem Solver</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Always learning & growing</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border animate-fade-in [animation-delay:300ms]">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">My Journey</h3>
          <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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
              I also have experience with <span className="text-primary font-semibold">SQL and MySQL</span>, enabling me to handle relational database operations, design schemas, and write optimized queries for data-driven applications.
            </p>
            <p>
              Beyond web development, I have strong foundations in{" "}
              <span className="text-secondary font-semibold">C++</span>, with expertise in{" "}
              <span className="text-secondary font-semibold">Data Structures & Algorithms</span> and{" "}
              <span className="text-secondary font-semibold">Object-Oriented Programming</span>.
              I actively practice problem-solving on platforms like{" "}
              <span className="text-secondary font-semibold">LeetCode</span> and{" "}
              <span className="text-secondary font-semibold">HackerRank</span>, continuously
              sharpening my algorithmic thinking and coding skills.
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
