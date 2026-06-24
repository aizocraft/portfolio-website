import {
  Database,
  Server,
  Globe,
  Code,
  Network,
  Shield,
  Cloud,
  Layers,
  Figma,
  GitBranch,
  Terminal,
  Box,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML/CSS", level: 98 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Express.js", level: 92 },
        { name: "REST API", level: 95 },
        { name: "GraphQL", level: 85 },
        { name: "Python", level: 88 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 94 },
        { name: "PostgreSQL", level: 88 },
        { name: "Redis", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 90 },
      ],
    },
    {
      title: "Networking",
      icon: Network,
      skills: [
        { name: "TCP/IP", level: 92 },
        { name: "Routing/ Switching", level: 88 },
        { name: "LAN & VLANs", level: 85 },
        { name: "DNS/CDN", level: 87 },
        { name: "WebSockets", level: 84 },
      ],
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 90 },
        { name: "AWS/Azure", level: 85 },
        { name: "CI/CD", level: 88 },
        { name: "Kubernetes", level: 80 },
        { name: "GitHub Actions", level: 86 },
      ],
    },
    {
      title: "Security",
      icon: Shield,
      skills: [
        { name: "OWASP", level: 88 },
        { name: "JWT/Auth", level: 92 },
        { name: "Encryption", level: 85 },
        { name: "Testing", level: 80 },
        { name: "XSS/CSRF", level: 87 },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", icon: Code },
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Layers },
    { name: "Postman", icon: Globe },
    { name: "Figma", icon: Figma },
    { name: "Terminal", icon: Terminal },
    { name: "Webpack", icon: Box },
    { name: "Jest", icon: Code },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-[#c2d8c4]/5 to-white dark:from-[#1a1a1a] dark:via-[#222222]/20 dark:to-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c2d8c4]/10 dark:bg-[#c2d8c4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/3 rounded-full blur-3xl" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.01] pointer-events-none" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 px-4 py-2 rounded-full mb-4">
            <span className="text-xs sm:text-sm font-semibold text-[#222222] dark:text-white">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-0.5 bg-[#c2d8c4] mx-auto mb-4" />

        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 rounded-2xl p-5 sm:p-6 hover:bg-white/80 dark:hover:bg-[#222222]/80 hover:shadow-xl hover:shadow-[#c2d8c4]/20 dark:hover:shadow-[#c2d8c4]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#c2d8c4]/30 dark:bg-[#c2d8c4]/20 rounded-xl flex items-center justify-center group-hover:bg-[#c2d8c4] group-hover:rotate-12 transition-all duration-300">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#222222] dark:text-white group-hover:text-[#222222]" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-[#222222] dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-medium text-[#222222]/80 dark:text-white/80">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-[#222222]/50 dark:text-white/50">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#c2d8c4] to-[#a0b8a2] rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#222222] dark:text-white mb-2">
              Tools & Platforms
            </h3>
            <p className="text-xs sm:text-sm text-[#222222]/50 dark:text-white/50">
              Everyday tools I use to build amazing products
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                className="flex items-center gap-2 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] hover:scale-105 transition-all duration-300 group cursor-default"
              >
                <tool.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#222222]/70 dark:text-white/70 group-hover:text-[#222222] transition-colors duration-300" />
                <span className="text-xs sm:text-sm font-medium text-[#222222]/80 dark:text-white/80 group-hover:text-[#222222] transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Add shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #c2d8c4 1px, transparent 1px),
            linear-gradient(to bottom, #c2d8c4 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}