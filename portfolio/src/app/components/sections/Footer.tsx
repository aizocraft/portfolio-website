import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, MapPin, Phone,  } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const socialLinks = [
    { icon: Github, href: "https://github.com/aizocraft", label: "GitHub", color: "hover:bg-[#333]" },
    { icon: Linkedin, href: "https://linkedin.com/in/kariuki-isaac", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
    { icon: Twitter, href: "https://x.com/aizotech", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: Mail, href: "mailto:kariukiisaac911@gmail.com", label: "Email", color: "hover:bg-[#EA4335]" },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Nairobi, Kenya" },
    { icon: Phone, text: "+254 741 653 862" },
    { icon: Mail, text: "kariukiisaac911@gmail.com" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#222222] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c2d8c4]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c2d8c4]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        {/* Updated grid: brand full width on mobile, then quick links + contact side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Brand Section - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/aizotech.png" 
                  alt="AizoTech Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className = "w-8 h-8 bg-[#c2d8c4] rounded-lg flex items-center justify-center";
                      fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#222222]"><path d="M2 12h4l3-9 3 9h4"/><path d="M2 12h20"/><path d="M12 21v-9"/></svg>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <h3 className="text-xl font-bold">Isaac Kariuki</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Full Stack Developer crafting scalable web applications with modern technologies.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 bg-white/5 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-[#c2d8c4] hover:text-[#222222] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group ${social.color}`}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact - Side by side on mobile using nested grid */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 relative inline-block">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#c2d8c4] rounded-full" />
                </h3>
                <ul className="space-y-2.5">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-white/50 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-[#c2d8c4] transition-all duration-300" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 relative inline-block">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#c2d8c4] rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-white/50 text-sm group">
                      <info.icon className="w-4 h-4 text-[#c2d8c4] group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{info.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs sm:text-sm">
            © {new Date().getFullYear()} Isaac Kariuki. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-white/40 text-xs sm:text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#c2d8c4] fill-current animate-pulse" /> 
              by aizocraft
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Animated */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-11 h-11 bg-[#c2d8c4] text-[#222222] rounded-full flex items-center justify-center transition-all duration-500 shadow-lg shadow-[#c2d8c4]/30 z-40 group ${
          showScrollTop 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-10 pointer-events-none"
        } hover:bg-white hover:scale-110 hover:-translate-y-1`}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}

// Add grid pattern styles
const style = document.createElement('style');
style.textContent = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(194, 216, 196, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(194, 216, 196, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;
document.head.appendChild(style);