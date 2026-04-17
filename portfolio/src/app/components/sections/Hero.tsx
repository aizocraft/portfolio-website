import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Calendar, Award, Sparkles, Code, Server, Database } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Typing animation for role
  const roles = ["Full Stack Developer", "MERN Expert", "UI/UX Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isTyping) {
      if (displayText.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[roleIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#c2d8c4]/5 to-white dark:from-[#1a1a1a] dark:via-[#222222] dark:to-[#1a1a1a]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#c2d8c4]/15 dark:bg-[#c2d8c4]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/3 rounded-full blur-3xl" />
        
        {/* Floating tech icons */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[5%] hidden lg:block"
        >
          <Code className="w-8 h-8 text-[#c2d8c4]/30 dark:text-[#c2d8c4]/20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[5%] hidden lg:block"
        >
          <Server className="w-10 h-10 text-[#c2d8c4]/30 dark:text-[#c2d8c4]/20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-2/3 left-[15%] hidden lg:block"
        >
          <Database className="w-6 h-6 text-[#c2d8c4]/25 dark:text-[#c2d8c4]/15" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 lg:space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg mx-auto lg:mx-0 w-fit"
            >
              <div className="w-2 h-2 bg-[#c2d8c4] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-[#222222] dark:text-white">Available for work</span>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#222222] dark:text-white leading-tight"
              >
                Isaac Kariuki
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-12 sm:h-14 md:h-16"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222222]/70 dark:text-white/70">
                  <span className="bg-gradient-to-r from-[#222222] to-[#c2d8c4] dark:from-white dark:to-[#c2d8c4] bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="animate-pulse">|</span>
                </h2>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg text-[#222222]/60 dark:text-white/60 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Crafting scalable web applications with MongoDB, Express, React, and Node.js. 
              Specialized in network architecture and creating seamless digital experiences.
            </motion.p>

            {/* Quick Info Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-[#222222]/50 dark:text-white/50"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>15+ Projects</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-[#222222] dark:bg-[#c2d8c4] text-white dark:text-[#222222] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-[#c2d8c4] dark:hover:bg-white hover:text-[#222222] transition-all duration-300 flex items-center gap-2 font-medium hover:shadow-xl hover:shadow-[#c2d8c4]/30 dark:hover:shadow-[#c2d8c4]/20 hover:scale-105 text-sm sm:text-base"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 text-[#222222] dark:text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-[#c2d8c4]/20 dark:hover:bg-[#c2d8c4]/10 transition-all duration-300 flex items-center gap-2 font-medium hover:shadow-lg hover:scale-105 text-sm sm:text-base">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@aizocraft.com", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-xl flex items-center justify-center hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-[#222222] dark:text-white hover:text-[#222222] group shadow-sm"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c2d8c4]/20 to-transparent rounded-full blur-2xl" />
                  <img
                    src="/pic.png"
                    alt="Isaac Kariuki - Full Stack Developer"
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 relative z-10"
                    style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "w-full h-full rounded-full bg-gradient-to-br from-[#c2d8c4]/30 to-[#c2d8c4]/10 flex items-center justify-center";
                        fallback.innerHTML = '<span class="text-6xl">👨‍💻</span>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#c2d8c4]/30 dark:bg-[#c2d8c4]/20 rounded-2xl -z-10 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 rounded-full -z-10 blur-xl"
              />
            
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer focus:outline-none z-20"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-xs text-[#222222]/40 dark:text-white/40 group-hover:text-[#222222]/70 dark:group-hover:text-white/70 transition-colors duration-300">
            Scroll
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#222222]/20 dark:border-white/20 rounded-full flex items-start justify-center p-1 sm:p-1.5 group-hover:border-[#c2d8c4] dark:group-hover:border-[#c2d8c4] transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-[#c2d8c4] rounded-full"
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
}

// Add React import for useState and useEffect
import React from "react";