import { Mail, Linkedin, Github, Code2, MapPin, Phone, Send, User, MessageSquare, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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
    href: "https://www.linkedin.com/in/prachi-patil-8b89b827b/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@prachipatilcloud",
    href: "https://github.com/prachipatilcloud",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "@prachipatilcloud",
    href: "https://leetcode.com/u/prachipatilcloud/",
  },
  {
    icon: Terminal,
    label: "HackerRank",
    value: "@misspatil_04",
    href: "https://www.hackerrank.com/profile/misspatil_04",
  },
];

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_93y7a5i';
const EMAILJS_TEMPLATE_ID = 'template_3sgc1lr';
const EMAILJS_PUBLIC_KEY = 'e_OnBA7sA2wgYOdUM';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map EmailJS field names to our state
    const fieldMap: { [key: string]: keyof typeof formData } = {
      'from_name': 'name',
      'from_email': 'email',
      'message': 'message'
    };
    
    const stateField = fieldMap[name] || name;
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      if (formRef.current) {
        const result = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );

        if (result.status === 200) {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out! I'll get back to you soon.",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Ready to <span className="text-primary">Hire Me?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Send me a message</h3>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-xs sm:text-sm font-medium">
                      Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="Your name or company name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-9 sm:pl-10 text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="from_email"
                        type="email"
                        placeholder="your.business@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-9 sm:pl-10 text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="text-sm resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--glow-primary)] transition-all duration-300 text-sm sm:text-base py-2.5 sm:py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & CTA Section */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in [animation-delay:200ms]">
            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Other ways to reach me</h3>
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] group"
                    style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors text-xs sm:text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold">Why Hire Me?</h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                I bring fresh perspectives, modern technologies, and dedicated commitment 
                to every project. From concept to deployment, I'll help transform your 
                ideas into powerful digital solutions.
              </p>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>Available for Remote & On-site Projects</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Code2 className="w-3 h-3 text-primary" />
                  <span>Full-Stack Development | Modern Tech Stack</span>
                </div>
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
