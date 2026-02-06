import { useTheme } from '../contexts/ThemeContext';
import { 
  Code, 
  Server, 
  Database, 
  Network, 
  Code2, 
  Wrench, 
  GraduationCap,
  Award,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Globe,
  Building,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = {
    Frontend: { icon: <Code className="w-5 h-5" />, skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Vite', 'Tailwind'] },
    Backend: { icon: <Server className="w-5 h-5" />, skills: ['Node.js', 'Express', 'REST APIs', 'Python', 'FastAPI'] },
    Database: { icon: <Database className="w-5 h-5" />, skills: ['MongoDB', 'Firebase', 'MySQL', 'PostgreSQL'] },
    Networking: { icon: <Network className="w-5 h-5" />, skills: ['CCNA 1 & 2', 'Wireshark', 'Network Security'] },
    Languages: { icon: <Code2 className="w-5 h-5" />, skills: ['Python', 'C/C++', 'JavaScript'] },
    Tools: { icon: <Wrench className="w-5 h-5" />, skills: ['Git', 'VS Code', 'Insomnia', 'Docker'] }
  };

  const experiences = [
    {
      company: "AizoCraft Inc.",
      role: "Freelancer",
      period: "2024 – PRESENT",
      achievements: [
        "Built Plasma Water Africa's corporate website with 40% engagement boost",
        "Developed AgriCart: Multi-vendor e-commerce platform",
        "Created CMS/ERP system for construction operations automation"
      ],
      icon: <Building className="w-5 h-5" />
    },
    {
      company: "Open Source",
      role: "Contributor",
      period: "2023 – PRESENT",
      achievements: [
        "Weather App with Python & OpenWeather API",
        "Multiple React component libraries",
        "Technical documentation & tutorials"
      ],
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const certifications = [
    { name: "Cisco CCNA", level: "Routing & Switching", icon: <Award className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "PLP Developer", level: "Software Development", icon: <GraduationCap className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "Cyber-Security", level: "Entry Level", icon: <Award className="w-5 h-5" />, color: "from-green-500 to-emerald-500" }
  ];

  const otherSkills = [
    { name: "Problem-Solving", icon: <Zap className="w-5 h-5" /> },
    { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> },
    { name: "Time Management", icon: <Clock className="w-5 h-5" /> },
    { name: "Adaptability", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects - Dark mode improved */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          theme === 'dark' ? 'bg-blue-600/40' : 'bg-blue-300/30'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          theme === 'dark' ? 'bg-purple-600/40' : 'bg-purple-300/30'
        }`}></div>
        <div className={`absolute top-1/4 left-1/4 w-60 h-60 rounded-full blur-3xl opacity-15 ${
          theme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-300/20'
        }`}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-4">
            <div className={`w-2 h-8 rounded-full mr-3 ${
              theme === 'dark' ? 'bg-gradient-to-b from-blue-400 to-cyan-400' : 'bg-gradient-to-b from-blue-500 to-purple-500'
            }`}></div>
            <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${
              theme === 'dark' ? 'from-white via-gray-100 to-cyan-100' : 'from-gray-900 to-gray-700'
            } bg-clip-text text-transparent`}>
              About Me
            </h2>
            <div className={`w-2 h-8 rounded-full ml-3 ${
              theme === 'dark' ? 'bg-gradient-to-b from-cyan-400 to-blue-400' : 'bg-gradient-to-b from-purple-500 to-blue-500'
            }`}></div>
          </div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate Computer Scientist specializing in Full Stack Development, Networking, and IT Solutions
          </p>
        </div>

        {/* Profile Card */}
        <div className="mb-20 animate-slide-up">
          <div className={`relative rounded-3xl p-8 md:p-12 backdrop-blur-xl border transition-all duration-500 hover:scale-[1.02] group about-card ${
            theme === 'dark' 
              ? 'bg-gray-900/80 border-gray-700/60 shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/40' 
              : 'bg-white/80 border-gray-200 shadow-2xl shadow-blue-100/50 hover:shadow-blue-200/60'
          }`}>
            <div className="absolute top-4 right-4">
              <Sparkles className={`w-6 h-6 ${
                theme === 'dark' ? 'text-yellow-300' : 'text-blue-500'
              }`} />
            </div>
            <h3 className={`text-3xl font-bold mb-6 flex items-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className={`w-3 h-3 rounded-full mr-3 ${
                theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-500'
              }`}></div>
              Professional Profile
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Computer Science student at Dedan Kimathi University of Technology (DeKUT) with practical experience in Full Stack Development, Networking, and IT Support. Demonstrated ability to develop scalable web applications and provide reliable technical solutions. Passionate about harnessing technology to enhance efficiency and address real-world challenges. Eager to apply technical skills and grow within a dynamic tech environment.
            </p>
            <div className={`mt-8 pt-8 border-t ${
              theme === 'dark' ? 'border-gray-700/60' : 'border-gray-200/50'
            }`}>
              <div className="flex flex-wrap gap-4">
                <div className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-blue-900/40 text-blue-200 hover:bg-blue-800/50' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}>
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Full Stack Dev</span>
                </div>
                <div className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-purple-900/40 text-purple-200 hover:bg-purple-800/50' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                }`}>
                  <Network className="w-4 h-4" />
                  <span className="font-medium">Network Engineering</span>
                </div>
                <div className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-green-900/40 text-green-200 hover:bg-green-800/50' : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}>
                  <Server className="w-4 h-4" />
                  <span className="font-medium">IT Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h3 className={`text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}>Professional Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
              theme === 'dark' ? 'bg-gradient-to-b from-blue-500/70 to-cyan-500/70' : 'bg-gradient-to-b from-blue-300/50 to-purple-300/50'
            }`}></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}>
                <div className={`relative rounded-2xl p-6 backdrop-blur-lg border transition-all duration-500 hover:scale-105 experience-card ${
                  theme === 'dark' 
                    ? 'bg-gray-900/80 border-gray-700/60 hover:bg-gray-800/90 hover:shadow-2xl hover:shadow-cyan-900/30' 
                    : 'bg-white/70 border-gray-200 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-200/50'
                } ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                  <div className={`absolute top-6 ${
                    index % 2 === 0 ? 'md:-right-6' : 'md:-left-6'
                  } w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gradient-to-br from-blue-600 to-cyan-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'
                  } shadow-lg z-10`}>
                    {exp.icon}
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{exp.company}</h4>
                  <p className={`mb-3 font-medium ${
                    theme === 'dark' ? 'text-cyan-300' : 'text-blue-600'
                  }`}>{exp.role} • {exp.period}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                          theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                        }`}></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className={`text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } dark:text-white`}>Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <div 
                key={category}
                onMouseEnter={() => setHoveredSkill(category)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative rounded-2xl p-6 backdrop-blur-lg border transition-all duration-500 hover:scale-105 skill-card ${
                  theme === 'dark' 
                    ? 'bg-gray-900/70 border-gray-700/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-900/30' 
                    : 'bg-white/60 border-gray-200/50 hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-100/30'
                } ${hoveredSkill === category ? 'scale-105' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl mr-4 transition-all duration-300 ${
                    theme === 'dark' ? 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/40' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}>
                    {data.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-110 cursor-pointer ${
                        theme === 'dark' 
                          ? 'bg-blue-900/30 text-blue-100 hover:bg-blue-800/50 hover:text-white' 
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h3 className={`text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}>Certifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className={`relative rounded-3xl p-8 backdrop-blur-lg border overflow-hidden group transition-all duration-500 hover:scale-105 certification-card ${
                  theme === 'dark' 
                    ? 'bg-gray-900/70 border-gray-700/60 hover:bg-gray-800/90 hover:shadow-2xl hover:shadow-cyan-900/20' 
                    : 'bg-white/70 border-gray-200 hover:bg-white/90 hover:shadow-2xl'
                }`}
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150 ${
                  cert.color
                }`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    theme === 'dark' 
                      ? 'bg-black' 
                      : 'bg-gradient-to-br from-white to gray-100'
                  } shadow-lg`}>
                    {cert.icon}
                  </div>
                  <h4 className={`text-2xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{cert.name}</h4>
                  <p className={`text-lg ${
                    theme === 'dark' ? 'text-cyan-200' : 'text-gray-600'
                  }`}>{cert.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h3 className={`text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white dark:text-white' : 'text-gray-900'
          }`}>Core Competencies</h3>
          <div className={`rounded-3xl p-8 md:p-12 backdrop-blur-xl border ${
            theme === 'dark' 
              ? 'bg-gray-900/70 border-gray-700/60' 
              : 'bg-white/60 border-gray-200'
          }`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group relative rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 soft-skill-card ${
                    theme === 'dark' 
                      ? 'bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-cyan-500/30' 
                      : 'bg-white/50 border border-gray-200 hover:bg-white/80 hover:border-blue-300'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 text-cyan-200 group-hover:from-blue-800/40 group-hover:to-cyan-800/40 group-hover:text-white' 
                      : 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 group-hover:from-blue-200 group-hover:to-cyan-200 group-hover:text-blue-800'
                  }`}>
                    {skill.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}