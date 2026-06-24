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

  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Laravel Expert",
      "React Specialist",
      "Network Engineer",
      "Database Architect",
      "Cloud Engineer",
    ],
    []
  );

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

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
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      setIsWaiting(true);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isWaiting, roleIndex, roles]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  // kept for potential future use; reduce re-renders (still memoized)
  useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
    []
  );

  const stats = [
    { icon: MapPin, label: "Nairobi, Kenya", delay: 0.55 },
    { icon: Calendar, label: "3+ Years Exp", delay: 0.6 },
    { icon: Award, label: "25+ Projects", delay: 0.65 },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/aizocraft", label: "GitHub", delay: 0.75 },
    { icon: Linkedin, href: "https://linkedin.com/in/kariuki-isaac", label: "LinkedIn", delay: 0.8 },
    { icon: Mail, href: "mailto:isaacngatho.dev@gmail.com", label: "Email", delay: 0.85 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#222222]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(194,216,196,0.35) 1px, rgba(194,216,196,0.0) 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                <span className="text-[#222222] dark:text-[#c2d8c4]">Isaac Kariuki</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-16 sm:h-20 flex items-center justify-center lg:justify-start"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222222]/70 dark:text-[#c2d8c4]/70">
                  I'm a
                </span>
                <div className="relative">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#222222] dark:text-[#c2d8c4]">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute -right-3 top-0 w-0.5 h-full bg-[#c2d8c4] dark:bg-[#c2d8c4]"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg text-[#222222]/70 dark:text-[#c2d8c4]/70 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Building high-performance web applications with{' '}
              <span className="text-[#222222] dark:text-[#c2d8c4] font-semibold">
                Laravel, React & Node.js
              </span>
              , powered by{' '}
              <span className="text-[#222222] dark:text-[#c2d8c4] font-semibold">cloud infrastructure</span>. I
              ensure your app is fast, secure, and always online.
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#222222]/5 dark:bg-[#c2d8c4]/10 rounded-full border border-[#c2d8c4]/20"
                >
                  <stat.icon className="w-3.5 h-3.5 text-[#c2d8c4]" />
                  <span className="text-xs sm:text-sm text-[#222222] dark:text-[#c2d8c4]/90 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden bg-[#222222] text-[#c2d8c4] px-6 py-3 rounded-xl font-semibold shadow-lg border border-[#c2d8c4]/30 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#c2d8c4]/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="group bg-[#c2d8c4]/15 text-[#222222] dark:text-[#c2d8c4] px-6 py-3 rounded-xl font-semibold border border-[#c2d8c4]/40 transition-all flex items-center gap-2 shadow-sm hover:shadow-lg"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </motion.button>
            </motion.div>

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
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: social.delay, duration: 0.5 }}
                  className="w-10 h-10 bg-[#222222]/5 dark:bg-[#c2d8c4]/10 border border-[#c2d8c4]/30 rounded-xl flex items-center justify-center transition-all text-[#222222] dark:text-[#c2d8c4] hover:bg-[#c2d8c4]/15"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      padding: "2px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(194,216,196,0.45)",
                      opacity: 0.9,
                    }}
                  />

                  <div className="absolute inset-0 bg-[#c2d8c4]/10 rounded-full blur-2xl" />

                  <img
                    src="/isaac_potrait1.png"
                    //src="/isaac_potrait.jpg"
                    alt="Isaac Kariuki"
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-full"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className =
                          "w-full h-full rounded-full bg-[#c2d8c4]/20 flex items-center justify-center";
                        fallback.innerHTML = '<span class="text-7xl">👨‍💻</span>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-[#c2d8c4]/15 rounded-2xl -z-10 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#c2d8c4]/10 rounded-full -z-10 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] sm:text-xs text-[#222222]/50 dark:text-[#c2d8c4]/40 tracking-wider font-mono">
            SCROLL
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#222222]/30 dark:border-[#c2d8c4]/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-[#c2d8c4] rounded-full"
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
}

