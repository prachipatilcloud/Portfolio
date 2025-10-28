import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import profilePic from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary">Available for Projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Prachi Prakash</span>
              <br />
              <span className="text-primary">Patil</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground">
              BTech CSE Student at{" "}
              <span className="text-primary font-semibold">Parul University</span> |
              Passionate about crafting elegant solutions with{" "}
              <span className="text-secondary font-semibold">MERN Stack</span> and{" "}
              <span className="text-secondary font-semibold">React</span>
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "MongoDB", "C++", "DSA", "OOP"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/prachipatilcloud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prachi-patil-8b89b827b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/prachipatilcloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="mailto:misspatil.04@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow" />
              <img
                src={profilePic}
                alt="Prachi Prakash Patil"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-float"
              />
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-card border border-primary rounded-2xl shadow-lg">
                <p className="text-3xl font-bold text-primary">1+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
