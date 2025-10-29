import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
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
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-left text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-primary">Available for Projects</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Prachi Prakash</span>
              <br />
              <span className="text-primary">Patil</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              BTech CSE Student at{" "}
              <span className="text-primary font-semibold">Parul University</span> |
              Passionate about crafting elegant solutions with{" "}
              <span className="text-secondary font-semibold">MERN Stack</span> and{" "}
              <span className="text-secondary font-semibold">React</span>
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {["React", "Node.js", "MongoDB", "C++", "DSA", "OOP"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-2 rounded-full bg-card border border-border text-xs sm:text-sm font-medium hover:border-primary transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--glow-primary)] transition-all duration-300 w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/prachipatilcloud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prachi-patil-8b89b827b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center animate-slide-in-right order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-glow" />
              <img
                src={profilePic}
                alt="Prachi Prakash Patil"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-float"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 px-3 sm:px-6 py-2 sm:py-3 bg-card border border-primary rounded-xl sm:rounded-2xl shadow-lg">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">1+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
