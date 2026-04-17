import { Code2, Briefcase, Award, Users, Heart, Target, Zap, Coffee } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const qualities = [
    { icon: Heart, text: "Passionate about code quality" },
    { icon: Target, text: "Results-driven approach" },
    { icon: Zap, text: "Fast problem solver" },
    { icon: Coffee, text: "Always learning" },
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-white dark:bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c2d8c4]/10 dark:bg-[#c2d8c4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/3 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-[5%] w-2 h-2 bg-[#c2d8c4]/30 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 right-[8%] w-3 h-3 bg-[#c2d8c4]/20 rounded-full hidden lg:block" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image - Clean with no frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative group">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="/about.png"
                  alt="Isaac Kariuki - Full Stack Developer"
                  className="w-full max-w-md lg:max-w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                  style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className = "w-80 h-80 rounded-full bg-gradient-to-br from-[#c2d8c4]/30 to-[#c2d8c4]/10 flex items-center justify-center";
                      fallback.innerHTML = '<span class="text-6xl">👨‍💻</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              {/* Decorative floating elements only - no frame/border */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 rounded-full -z-10 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c2d8c4]/15 dark:bg-[#c2d8c4]/8 rounded-full -z-10 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Section Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 px-4 py-2 rounded-full">
                <span className="text-xs sm:text-sm font-semibold text-[#222222] dark:text-white">About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] dark:text-white leading-tight">
                Transforming Ideas Into Digital Reality
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-[#222222]/60 dark:text-white/60">
              <p className="leading-relaxed text-sm sm:text-base">
                I'm <span className="text-[#222222] dark:text-white font-medium">Isaac Kariuki</span>, a Full Stack Developer specializing in the MERN stack with extensive 
                experience in network architecture and infrastructure design.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                My journey in software development began with a fascination for 
                how things work behind the scenes. Today, I create robust, scalable 
                applications that solve real-world problems for businesses worldwide.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                With a strong foundation in networking protocols and distributed 
                systems, I bring a unique perspective to full-stack development, 
                ensuring both performance and reliability in every project.
              </p>
            </div>

            {/* Qualities Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-1.5 bg-white/60 dark:bg-[#222222]/60 backdrop-blur-sm border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 px-3 py-1.5 rounded-full"
                >
                  <quality.icon className="w-3.5 h-3.5 text-[#c2d8c4]" />
                  <span className="text-xs text-[#222222] dark:text-white/80">{quality.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-2"
            >
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group bg-[#222222] dark:bg-[#c2d8c4] text-white dark:text-[#222222] px-6 py-2.5 rounded-xl hover:bg-[#c2d8c4] dark:hover:bg-white transition-all duration-300 font-medium hover:shadow-xl hover:shadow-[#c2d8c4]/30 dark:hover:shadow-[#c2d8c4]/20 hover:scale-105 text-sm"
              >
                Let's Work Together
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}