import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Calendar, Award, Code, Server, Database, Globe, Cpu, Cloud} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useState, useEffect, useCallback, useMemo } from "react";

export function Hero() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Isaac_Kariuki_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Roles for typewriter effect
  const roles = useMemo(() => [
    "Full Stack Developer",
    "Laravel Expert",
    "React Specialist",
    "Network Engineer",
    "Database Architect",
    "Cloud Engineer"
  ], []);

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Optimized typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    
    if (!isDeleting && displayText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      // Wait before deleting
      setIsWaiting(true);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isWaiting, roleIndex, roles]);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // Particles with reduced count for performance
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
      size: 2 + Math.random() * 4,
    })), []
  );

  const stats = [
    { icon: MapPin, label: "Nairobi, Kenya", delay: 0.55 },
    { icon: Calendar, label: "3+ Years Exp", delay: 0.6 },
    { icon: Award, label: "25+ Projects", delay: 0.65 },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/aizocraft", label: "GitHub", delay: 0.75 },
    { icon: Linkedin, href: "https://linkedin.com/in/kariuki-isaac", label: "LinkedIn", delay: 0.8 },
    { icon: Mail, href: "mailto:kariukiisaac911@gmail.com", label: "Email", delay: 0.85 },
  ];

  const techIcons = [
    { icon: Code, x: "5%", y: "20%", delay: 0, duration: 6 },
    { icon: Server, x: "90%", y: "75%", delay: 1, duration: 7 },
    { icon: Database, x: "8%", y: "70%", delay: 2, duration: 5.5 },
    { icon: Globe, x: "88%", y: "25%", delay: 1.5, duration: 8 },
    { icon: Cpu, x: "12%", y: "45%", delay: 0.8, duration: 6.5 },
    { icon: Cloud, x: "85%", y: "55%", delay: 2.5, duration: 7 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-[#0f0f1a] dark:to-[#0a0a0a]"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#c2d8c4]/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-[#c2d8c4]/10 to-transparent rounded-full blur-3xl"
        />
        
        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/15"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -40, 0, 40, 0],
              x: [0, 25, 0, -25, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating Tech Icons */}
        <div className="hidden lg:block">
          {techIcons.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -20, 0], x: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              className="absolute"
              style={{ left: item.x, top: item.y }}
            >
              <div className="p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-[#c2d8c4]/20">
                <item.icon className="w-5 h-5 text-[#c2d8c4]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-xl border border-[#c2d8c4]/30 px-4 py-2 rounded-full mx-auto lg:mx-0 w-fit"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative w-2 h-2"
              >
                <div className="absolute inset-0 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50" />
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-white/90 dark:to-white bg-clip-text text-transparent">
                  Isaac Kariuki
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-16 sm:h-20 flex items-center justify-center lg:justify-start"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-white/60">
                  I'm a
                </span>
                <div className="relative">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] dark:from-[#c2d8c4] dark:to-[#a8d5a8] bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute -right-3 top-0 w-0.5 h-full bg-gradient-to-b from-[#c2d8c4] to-[#8fbc8f]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 dark:text-white/70 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Building high-performance web applications with{' '}
              <span className="text-gray-900 dark:text-white font-semibold">Laravel, React & Node.js</span>
              , powered by{' '}
              <span className="text-gray-900 dark:text-white font-semibold">cloud infrastructure</span>
              . I ensure your app is fast, secure, and always online.
            </motion.p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-[#1a1a2e]/60 backdrop-blur-md rounded-full border border-[#c2d8c4]/20"
                >
                  <stat.icon className="w-3.5 h-3.5 text-[#c2d8c4]" />
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-white/80 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 dark:from-[#c2d8c4] dark:to-[#b8d4ba] text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] dark:from-white dark:to-white/80"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="group bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-xl border-2 border-[#c2d8c4]/30 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold hover:border-[#c2d8c4]/60 transition-all flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: social.delay, duration: 0.5 }}
                  className={`w-10 h-10 bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-xl border border-[#c2d8c4]/30 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-700 dark:text-white shadow-sm hover:shadow-md`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image with 3D Effect */}
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                  {/* Animated Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, #c2d8c4, transparent, #c2d8c4, transparent, #c2d8c4)",
                      padding: "2px",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  
                  {/* Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c2d8c4]/20 to-transparent rounded-full blur-2xl" />
                  
                  <img
                    src="/pic.png"
                    alt="Isaac Kariuki"
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-full"
                    loading="eager"
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
              
              {/* Floating Orbs */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#c2d8c4]/20 to-transparent rounded-2xl -z-10 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tr from-[#c2d8c4]/15 to-transparent rounded-full -z-10 blur-xl"
              />
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] sm:text-xs text-gray-400 dark:text-white/40 tracking-wider font-mono">
            SCROLL
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 dark:border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-gradient-to-b from-[#c2d8c4] to-[#8fbc8f] rounded-full"
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
}