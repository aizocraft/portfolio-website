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
  Smartphone,
  GitPullRequest,
  Monitor,
  Braces,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "Laravel",
        "Django",
        "PHP",
        "Python",
        "REST APIs",
        "JWT Authentication",
        "Socket.IO",
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Kotlin", "Firebase"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Firebase", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Render", "Linux", "Nginx"],
    },
    {
      title: "Networking & Infrastructure",
      icon: Network,
      skills: [
        "Cisco CCNA",
        "TCP/IP",
        "Routing",
        "Switching",
        "VLANs",
        "DNS",
        "DHCP",
        "VPN",
        "Windows Server",
      ],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        "OWASP Top 10",
        "Authentication",
        "Authorization",
        "API Security",
        "HTTPS",
        "System Hardening",
      ],
    },
    {
      title: "Software Engineering",
      icon: Braces,
      skills: [
        "Object-Oriented Programming",
        "SOLID Principles",
        "Design Patterns",
        "MVC Architecture",
        "Clean Architecture",
        "Agile",
        "Git Flow",
      ],
    },
  ];

  const featuredTechnologies = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "Flutter",
    "MongoDB",
    "AWS",
    "Docker",
  ];

  const tools = [
    { name: "VS Code", icon: Code },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitPullRequest },
    { name: "Postman", icon: Globe },
    { name: "Docker", icon: Layers },
    { name: "Figma", icon: Figma },
    { name: "Linux", icon: Terminal },
    { name: "npm", icon: Box },
    { name: "Yarn", icon: Box },
  ];

  return (
<section
  id="skills"
  className="py-20 sm:py-28 bg-white dark:bg-[#222222] relative overflow-hidden"
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
            <span className="text-xs sm:text-sm font-semibold text-[#222222] dark:text-white">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] dark:text-white mb-4">
            Technologies I Use
          </h2>
          <div className="w-16 h-0.5 bg-[#c2d8c4] mx-auto mb-4" />

        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-4">
              <h3 className="text-sm font-semibold text-[#222222]/60 dark:text-white/60">
                Featured Technologies
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {featuredTechnologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-4 py-2 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-full text-sm font-medium text-[#222222] dark:text-white hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] hover:text-[#222222] transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid - Technology Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.08, duration: 0.6 }}
              className="group bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 rounded-2xl p-5 sm:p-6 hover:bg-white/80 dark:hover:bg-[#222222]/80 hover:shadow-xl hover:shadow-[#c2d8c4]/20 dark:hover:shadow-[#c2d8c4]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c2d8c4]/30 dark:bg-[#c2d8c4]/20 rounded-xl flex items-center justify-center group-hover:bg-[#c2d8c4] group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                  <category.icon className="w-5 h-5 text-[#222222] dark:text-white group-hover:text-[#222222]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#222222] dark:text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.6 + index * 0.08 + skillIndex * 0.02,
                      duration: 0.3,
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-2.5 py-1 bg-[#c2d8c4]/10 dark:bg-[#c2d8c4]/5 border border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10 rounded-full text-xs text-[#222222] dark:text-white/80 hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] hover:text-[#222222] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#222222] dark:text-white mb-2">
              Development Tools
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
                transition={{ delay: 0.95 + index * 0.04, duration: 0.3 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] transition-all duration-300 group cursor-default"
              >
                <tool.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#222222]/70 dark:text-white/70 group-hover:text-[#222222] transition-colors duration-300" />
                <span className="text-xs sm:text-sm font-medium text-[#222222]/80 dark:text-white/80 group-hover:text-[#222222] transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#c2d8c4]/10 dark:bg-[#c2d8c4]/5 border border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10 rounded-xl px-6 py-3">
            <CheckCircle className="w-4 h-4 text-[#c2d8c4]" />
            <span className="text-sm text-[#222222]/70 dark:text-white/70">
              Building secure, scalable, and production-ready software using modern technologies
              and industry best practices.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Add shimmer animation and grid pattern styles */}
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
        @media (prefers-reduced-motion: reduce) {
          .animate-shimmer {
            animation: none;
          }
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}