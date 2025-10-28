import { Mail, Linkedin, Github, Code2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "misspatil.04@gmail.com",
    href: "mailto:misspatil.04@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Prachi Patil",
    href: "https://www.linkedin.com/in/prachi-patil-50b948250/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@prachipatidar04",
    href: "https://github.com/prachipatidar04",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "@prachipatil04",
    href: "https://leetcode.com/u/prachipatil04/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center animate-fade-in [animation-delay:400ms]">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 space-y-6">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to collaborate on interesting projects and explore
                new opportunities. Whether you have a project in mind, need help with
                development, or just want to connect, feel free to reach out!
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Parul University, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span>MERN Stack | React | C++ Development</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--glow-primary)] transition-all duration-300"
                  asChild
                >
                  <a href="mailto:misspatil.04@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/prachi-patil-50b948250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center animate-fade-in [animation-delay:500ms]">
          <p className="text-muted-foreground">
            © 2025 Prachi Prakash Patil. Built with{" "}
            <span className="text-primary">React</span> and{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
