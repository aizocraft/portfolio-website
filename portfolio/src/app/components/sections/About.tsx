import { Code2, ArrowRight,Briefcase, Award, Users, Heart, Target, Zap, Coffee, Sparkles, Shield, Rocket, Globe, Cpu } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const qualities = [
    { icon: Heart, text: "Passionate about code quality", gradient: "from-rose-500/20 to-rose-500/5" },
    { icon: Target, text: "Results-driven approach", gradient: "from-blue-500/20 to-blue-500/5" },
    { icon: Zap, text: "Fast problem solver", gradient: "from-amber-500/20 to-amber-500/5" },
    { icon: Coffee, text: "Always learning", gradient: "from-emerald-500/20 to-emerald-500/5" },
  ];

  const stats = [
    { icon: Code2, value: "20+", label: "Technologies", color: "from-cyan-500 to-blue-500" },
    { icon: Briefcase, value: "15+", label: "Projects Completed", color: "from-violet-500 to-purple-500" },
    { icon: Users, value: "12+", label: "Happy Clients", color: "from-emerald-500 to-teal-500" },
    { icon: Shield, value: "100%", label: "Secure Delivery", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-gradient-to-br from-white via-[#c2d8c4]/3 to-white dark:from-[#0a0a0a] dark:via-[#1a1a2e]/20 dark:to-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#c2d8c4]/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#c2d8c4]/10 to-transparent rounded-full blur-3xl"
        />
        </div>
        {/* Grid Pattern Overlay */}
        <div 
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23c2d8c4' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative group">
              {/* Animated Gradient Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#c2d8c4] via-[#8fbc8f] to-[#c2d8c4] opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500"
              />
              
              {/* Main Image Container with Glassmorphism */}
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-2">
                <img
                  src="/about.png"
                  alt="Isaac Kariuki - Full Stack Developer"
                  className="w-full max-w-md lg:max-w-full h-auto object-contain rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className = "w-80 h-80 rounded-2xl bg-gradient-to-br from-[#c2d8c4]/30 to-[#c2d8c4]/10 flex items-center justify-center";
                      fallback.innerHTML = '<span class="text-7xl">👨‍💻</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 p-2 bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-md rounded-xl shadow-lg border border-[#c2d8c4]/30"
              >
                <Rocket className="w-5 h-5 text-[#c2d8c4]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 p-2 bg-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-md rounded-xl shadow-lg border border-[#c2d8c4]/30"
              >
                <Cpu className="w-5 h-5 text-[#c2d8c4]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Section Header with Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c2d8c4]/20 to-transparent backdrop-blur-sm border border-[#c2d8c4]/30 px-4 py-2 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#c2d8c4]" />
                <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#222222] to-[#444444] dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                  About Me
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#222222] via-[#444444] to-[#222222] dark:from-white dark:via-white/90 dark:to-white bg-clip-text text-transparent">
                  Transforming Ideas
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] bg-clip-text text-transparent">
                  Into Digital Reality
                </span>
              </h2>
            </motion.div>

            {/* Description - UPDATED with better punchline, no MERN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="space-y-4 text-[#222222]/60 dark:text-white/60"
            >
              <p className="leading-relaxed text-base sm:text-lg">
                I'm <span className="text-[#222222] dark:text-white font-semibold">Isaac Kariuki</span>, a Full Stack Developer who bridges the gap between 
                <span className="text-[#222222] dark:text-white font-medium"> high-performance web applications </span> 
                and <span className="text-[#222222] dark:text-white font-medium">robust network infrastructure</span>.
              </p>
              <p className="leading-relaxed text-base">
                I build with <span className="text-[#222222] dark:text-white font-medium">Laravel, React, and Node.js</span>, choosing the right database for each job — 
                <span className="text-[#222222] dark:text-white font-medium"> PostgreSQL, MongoDB, MySQL, or Redis</span>. 
                My networking background (TCP/IP, DNS, routing) means I don't just write code — I architect systems that stay online, fast, and secure.
              </p>
              <p className="leading-relaxed text-base">
                Whether you need a scalable API, a responsive dashboard, or complete infrastructure setup, 
                I deliver production-ready solutions that businesses trust.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 gap-3 pt-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.45 + index * 0.1, duration: 0.4 }}
                  className="group relative overflow-hidden bg-white/50 dark:bg-[#1a1a2e]/50 backdrop-blur-md rounded-xl border border-[#c2d8c4]/20 p-3 hover:border-[#c2d8c4]/40 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#c2d8c4]/20">
                      <stat.icon className="w-4 h-4 text-[#c2d8c4]" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#222222] dark:text-white">{stat.value}</div>
                      <div className="text-xs text-[#222222]/50 dark:text-white/50">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Qualities Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`flex items-center gap-1.5 bg-gradient-to-r ${quality.gradient} backdrop-blur-sm border border-[#c2d8c4]/30 px-3 py-1.5 rounded-full cursor-default`}
                >
                  <quality.icon className="w-3.5 h-3.5 text-[#c2d8c4]" />
                  <span className="text-xs text-[#222222] dark:text-white/80 font-medium">{quality.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative overflow-hidden bg-gradient-to-r from-[#222222] to-[#333333] dark:from-[#c2d8c4] dark:to-[#b8d4ba] text-white dark:text-[#1a1a1a] px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] dark:from-white dark:to-white/80"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}