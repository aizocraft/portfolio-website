import { Code2, Zap,  Shield, Rocket, Cpu, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });



  const qualities = [
    { icon: CheckCircle, text: "Clean Architecture" },
    { icon: Zap, text: "Performance Focused" },
    { icon: Shield, text: "Security First" },
    { icon: Code2, text: "Continuous Learning" },
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-white dark:bg-[#222222] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(194,216,196,0.35) 1px, rgba(194,216,196,0.0) 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c2d8c4]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-2 lg:order-1 flex justify-center lg:sticky lg:top-24"
          >
            <div className="relative group">
              {/* Animated Gradient Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-2xl border border-[#c2d8c4]/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Main Image Container with Glassmorphism */}
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-2">
                <img
                  src="/isaac_image1.png"
                  alt="Isaac Kariuki - Full Stack Software Developer"
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
                <Rocket className="w-5 h-5 text-[#2b6cb0] dark:text-[#8ecae6]" />
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
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Section Header with Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-[#1a1a2e]/40 border border-[#c2d8c4]/30 px-4 py-2 rounded-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c2d8c4]" />
                <span className="text-xs sm:text-sm font-semibold text-[#222222] dark:text-white/90">
                  About Me
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-[#222222] dark:text-white">Engineering Software</span>
                <br />
                <span className="text-[#222222] dark:text-[#c2d8c4]">That Drives Business Growth</span>
              </h2>
            </motion.div>



            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="space-y-4 text-[#222222]/60 dark:text-white/60"
            >
              <p className="leading-relaxed text-base sm:text-lg">
                I'm <span className="text-[#222222] dark:text-white font-semibold">Isaac Kariuki</span>, a Full-Stack Software Developer passionate about building secure, scalable, and high-performance web and mobile applications. I combine software engineering, networking, and IT expertise to deliver reliable digital solutions that solve real business challenges.
              </p>

              <p className="leading-relaxed text-base">
                From enterprise dashboards and e-commerce platforms to REST APIs, cloud deployments, and network infrastructure, I deliver production-ready solutions with a strong emphasis on performance, security, maintainability, and user experience.
              </p>
            </motion.div>



            {/* Qualities Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.05 + index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-1.5 backdrop-blur-sm border border-[#c2d8c4]/30 px-3 py-1.5 rounded-full cursor-default bg-white/30 dark:bg-[#1a1a2e]/30"
                >
                  <quality.icon className="w-3.5 h-3.5 text-[#c2d8c4]" />
                  <span className="text-xs font-medium text-[#222222] dark:text-white/80">{quality.text}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}