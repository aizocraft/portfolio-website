import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Calendar, Award, Code, Server, Database, Globe, Cpu, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Create a link to the PDF file in the public folder
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Isaac_Kariuki_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Typing animation for role - UPDATED with broader tech stack
  const roles = [
    "Full Stack Developer",
    "Laravel & React Expert",
    "Network Engineer",
    "Database Architect"
  ];
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

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 6,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#c2d8c4]/5 to-white dark:from-[#0a0a0a] dark:via-[#1a1a2e]/30 dark:to-[#0a0a0a]"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#c2d8c4]/30 dark:bg-[#c2d8c4]/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#c2d8c4]/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-[#c2d8c4]/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/3 rounded-full blur-3xl"
        />
        
        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[5%] hidden lg:block"
        >
          <div className="p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-[#c2d8c4]/20">
            <Code className="w-6 h-6 text-[#c2d8c4]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[5%] hidden lg:block"
        >
          <div className="p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-[#c2d8c4]/20">
            <Server className="w-6 h-6 text-[#c2d8c4]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-2/3 left-[12%] hidden lg:block"
        >
          <div className="p-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-[#c2d8c4]/20">
            <Database className="w-4 h-4 text-[#c2d8c4]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/3 right-[15%] hidden lg:block"
        >
          <div className="p-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-[#c2d8c4]/20">
            <Globe className="w-4 h-4 text-[#c2d8c4]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, -8, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-1/3 right-[8%] hidden lg:block"
        >
          <div className="p-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-[#c2d8c4]/20">
            <Cpu className="w-4 h-4 text-[#c2d8c4]" />
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-5 lg:space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/60 dark:bg-[#1a1a2e]/60 backdrop-blur-xl border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 px-4 py-2 rounded-full shadow-lg mx-auto lg:mx-0 w-fit group hover:border-[#c2d8c4]/50 transition-all duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"
              />
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#222222] to-[#444444] dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                Available for work · Open to opportunities
              </span>
            </motion.div>

            {/* Main Title with Glitch Effect on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#222222] via-[#444444] to-[#222222] dark:from-white dark:via-white/90 dark:to-white bg-clip-text text-transparent">
                  Isaac Kariuki
                </span>
              </h1>
              
              {/* Animated Role Text */}
              <div className="h-14 sm:h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222222]/60 dark:text-white/60">
                    I'm a{" "}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] dark:from-[#c2d8c4] dark:to-[#a8d5a8] bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-8 sm:h-10 bg-[#c2d8c4] ml-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* Description - UPDATED with better punchline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg text-[#222222]/60 dark:text-white/60 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              I build high-performance web applications with <span className="text-[#222222] dark:text-white font-medium">Laravel, React, and Node.js</span>, 
              powered by <span className="text-[#222222] dark:text-white font-medium">PostgreSQL, MongoDB, and Redis</span>. 
              With deep expertise in <span className="text-[#222222] dark:text-white font-medium">network architecture</span>, I ensure your app is fast, secure, and always online.
            </motion.p>

            {/* Stats Row with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {[
                { icon: MapPin, label: "Nairobi, Kenya" },
                { icon: Calendar, label: "3+ Years Experience" },
                { icon: Award, label: "15+ Projects" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/40 dark:bg-[#1a1a2e]/40 backdrop-blur-md rounded-full border border-[#c2d8c4]/20"
                >
                  <stat.icon className="w-3.5 h-3.5 text-[#c2d8c4]" />
                  <span className="text-xs sm:text-sm text-[#222222]/70 dark:text-white/70 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-[#222222] to-[#333333] dark:from-[#c2d8c4] dark:to-[#b8d4ba] text-white dark:text-[#1a1a1a] px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] dark:from-white dark:to-white/80"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="group bg-white/60 dark:bg-[#1a1a2e]/60 backdrop-blur-xl border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 text-[#222222] dark:text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c2d8c4]/20 dark:hover:bg-[#c2d8c4]/10 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-3 pt-2"
            >
              {[
                { icon: Github, href: "https://github.com/aizocraft", label: "GitHub", color: "hover:bg-[#333]" },
                { icon: Linkedin, href: "https://linkedin.com/in/kariuki-isaac", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
                { icon: Mail, href: "mailto:kariukiisaac911@gmail.com", label: "Email", color: "hover:bg-[#D44638]" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/60 dark:bg-[#1a1a2e]/60 backdrop-blur-xl border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-xl flex items-center justify-center transition-all duration-300 text-[#222222] dark:text-white shadow-sm ${social.color}`}
                >
                  <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image with Advanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container with Glassmorphism Frame */}
              <div className="relative z-10">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                  {/* Animated Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c2d8c4] via-transparent to-[#c2d8c4] opacity-30"
                    style={{ padding: "2px" }}
                  />
                  
                  {/* Image with Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c2d8c4]/20 to-transparent rounded-full blur-2xl" />
                  <img
                    src="/pic.png"
                    alt="Isaac Kariuki - Full Stack Developer"
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-full"
                    style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "w-full h-full rounded-full bg-gradient-to-br from-[#c2d8c4]/30 to-[#c2d8c4]/10 flex items-center justify-center";
                        fallback.innerHTML = '<span class="text-7xl">👨‍💻</span>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Orbs around Image */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#c2d8c4]/40 to-[#c2d8c4]/10 rounded-2xl -z-10 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-[#c2d8c4]/30 to-[#c2d8c4]/5 rounded-full -z-10 blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-10 w-12 h-12 bg-[#c2d8c4]/20 rounded-full blur-lg"
              />
              
              {/* Sparkle Effects */}
              <motion.div
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute top-10 right-10"
              >
                <Sparkles className="w-4 h-4 text-[#c2d8c4]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer focus:outline-none z-20"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-xs text-[#222222]/40 dark:text-white/40 group-hover:text-[#222222]/70 dark:group-hover:text-white/70 transition-colors duration-300 tracking-wider">
            SCROLL
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#222222]/20 dark:border-white/20 rounded-full flex items-start justify-center p-1 sm:p-1.5 group-hover:border-[#c2d8c4] dark:group-hover:border-[#c2d8c4] transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-[#c2d8c4] rounded-full"
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
}