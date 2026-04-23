import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

// ============================================
// EDITABLE DATA - MODIFY HERE
// ============================================

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  link?: string;
  highlight?: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Codveda Solutions",
    role: "Intern Software Engineer",
    period: "Feb 2026 – PRESENT",
    location: "Remote",
    achievements: [
      "django development",
      "React development",
      "AI development"
    ],
    link: "https://aizocraft.com",
    highlight: true
  },
  {
    id: 2,
    company: "Embu Level 5 Hospital",
    role: "I.T Support Assistant",
    period: "Jan – Apr 2026",
    location: "Embu, Kenya",
    achievements: [
      "Provided technical support to hospital staff, resolving 95% of issues on first contact",
      "Maintained and updated hospital IT infrastructure, ensuring 99.9% uptime",
  
    ],
    link: "https://www.embuhospital.go.ke"
  },
  {
    id: 3,
    company: "Freelance Projects",
    role: "Full Stack Developer",
    period: "2023 – Ongoing",
    location: "Remote",
    achievements: [
      "Developed custom e-commerce solutions for 10+ clients",
      "Collaborated with clients to understand their needs",
      "Delivered projects on time and within budget"  
    ],
    link: "#"
  },
  {
    id: 4,
    company: "DeKUT",
    role: "BSc Computer Science Student",
    period: "2022 – 2026",
    location: "Nyeri, Kenya",
    achievements: [
        "Coding clubs and hackathons",
      "Completed coursework in web development, mobile app development, and cybersecurity",
      "Completed data structures, algorithms, and software engineering"

    
    ],
    link: "https://www.dekut.ac.ke"
  }
];

// ============================================
// TIMELINE CARD COMPONENT
// ============================================

interface TimelineCardProps {
  experience: Experience;
  side: 'left' | 'right';
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ experience, side, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${side === 'left' ? 'lg:pr-12' : 'lg:pl-12'}`}
    >
      {/* Card */}
      <motion.div 
        className={`
          group relative bg-white/90 dark:bg-[#222222]/90 backdrop-blur-sm rounded-2xl p-6 
          transition-all duration-500
          border border-white/50 dark:border-[#c2d8c4]/10
          ${experience.highlight ? 'ring-2 ring-[#c2d8c4] shadow-lg' : ''}
        `}
        style={{
          boxShadow: isHovered ? '0 25px 40px -12px rgba(194, 216, 196, 0.3)' : '0 10px 30px -15px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
      >
        {/* Highlight badge with animation */}
        {experience.highlight && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="absolute -top-3 left-6 bg-[#c2d8c4] text-[#222222] text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            Current Position
          </motion.div>
        )}

        {/* Company header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <motion.div 
              className="p-2 rounded-xl bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10"
              animate={{ rotate: isHovered ? 12 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Briefcase className="w-4 h-4 text-[#222222] dark:text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold text-[#222222] dark:text-white">
              {experience.company}
            </h3>
          </div>
          {experience.link && experience.link !== "#" && (
            <motion.a 
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#222222] dark:hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ rotate: 45 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Role with hover effect */}
        <motion.p 
          className="text-sm font-medium text-[#222222]/70 dark:text-white/70 mb-2"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {experience.role}
        </motion.p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500 dark:text-white/50">
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="w-3.5 h-3.5 text-[#c2d8c4]" />
            <span>{experience.period}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#c2d8c4]" />
            <span>{experience.location}</span>
          </motion.div>
        </div>

        {/* Achievements with staggered animations */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-white/60 cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ x: 5 }}
              onClick={() => setExpandedAchievement(expandedAchievement === idx ? null : idx)}
            >
              <motion.span 
                className="text-[#c2d8c4] mt-0.5 font-bold"
                animate={{ scale: expandedAchievement === idx ? 1.2 : 1 }}
              >
                ▹
              </motion.span>
              <motion.span 
                className="leading-relaxed"
                animate={{ 
                  fontWeight: expandedAchievement === idx ? 500 : 400,
                  color: expandedAchievement === idx ? '#222222' : undefined
                }}
              >
                {achievement}
                {expandedAchievement === idx && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="block mt-1 text-xs text-[#c2d8c4]"
                  >
                    Click to collapse
                  </motion.span>
                )}
              </motion.span>
            </motion.li>
          ))}
        </ul>

        {/* Decorative corner accent */}
        <motion.div 
          className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#c2d8c4]/20 rounded-br-lg"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const Professional: React.FC = () => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#c2d8c4]/5 to-white dark:from-[#1a1a1a] dark:via-[#222222]/20 dark:to-[#1a1a1a] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c2d8c4]/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              y: [null, -30, 30],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Header with animations */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/60 dark:bg-[#222222]/60 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm mb-4 border border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-3.5 h-3.5 text-[#222222]/70 dark:text-white/70" />
            </motion.div>
            <span className="text-xs font-medium text-[#222222]/70 dark:text-white/70 uppercase tracking-wide">
              Career Timeline
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-[#222222] dark:text-white tracking-tight"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Professional Journey
          </motion.h1>
          
          <motion.div 
            className="w-16 h-0.5 bg-[#c2d8c4] mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          

        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Visible central line */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c2d8c4]/30 via-[#c2d8c4] to-[#c2d8c4]/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ originY: 0 }}
          />
          
          {/* Central line glow effect */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#c2d8c4]/20 blur-sm" />
          
          {/* Top dot decoration */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <div className="w-4 h-4 rounded-full bg-[#c2d8c4] shadow-lg shadow-[#c2d8c4]/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
          </motion.div>
          
          {/* Bottom dot decoration */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <div className="w-4 h-4 rounded-full bg-[#c2d8c4] shadow-lg shadow-[#c2d8c4]/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
          </motion.div>

          {/* Timeline entries */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Mobile layout */}
                <div className="lg:hidden">
                  <TimelineCard experience={exp} side="left" index={index} />
                </div>
                
                {/* Desktop layout */}
                <div className="hidden lg:block">
                  {index % 2 === 0 ? (
                    <div className="grid grid-cols-2 gap-8">
                      <div className="pr-10">
                        <TimelineCard experience={exp} side="left" index={index} />
                      </div>
                      <div />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-8">
                      <div />
                      <div className="pl-10">
                        <TimelineCard experience={exp} side="right" index={index} />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Timeline dot */}
                <motion.div 
                  className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  onMouseEnter={() => setHoveredDot(index)}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  <motion.div 
                    className={`
                      w-5 h-5 rounded-full bg-white dark:bg-[#222222] border-2 border-[#c2d8c4] 
                      shadow-md cursor-pointer
                      ${exp.highlight ? 'shadow-lg shadow-[#c2d8c4]/50' : ''}
                    `}
                    animate={{ 
                      scale: hoveredDot === index ? 1.3 : 1,
                      borderWidth: hoveredDot === index ? 3 : 2
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className={`
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-2 h-2 rounded-full bg-[#c2d8c4]
                      `}
                      animate={{ 
                        scale: hoveredDot === index ? 1.2 : 1,
                        backgroundColor: hoveredDot === index ? '#c2d8c4' : '#c2d8c4'
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Connecting lines with animations */}
                {index % 2 === 0 && (
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-[#c2d8c4] to-transparent"
                    style={{ left: 'calc(50% - 24px)' }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  />
                )}
                
                {index % 2 !== 0 && (
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-l from-[#c2d8c4] to-transparent"
                    style={{ left: 'calc(50% + 0px)' }}
                    initial={{ scaleX: 0, originX: 1 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Professional;