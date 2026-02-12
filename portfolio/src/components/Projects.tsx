import { useState } from 'react';
import {  Github, Eye, Zap, ChevronRight, Sparkles,  ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    title: 'Plasma Water Africa',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    desc: 'Corporate website boosting client engagement by 40%. Modern UI with seamless user experience.',
    category: 'Web Development',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI'],
    stats: '40% ↑ Engagement',
    accentColor: 'from-cyan-500 to-blue-500',
    image: '/PlasmaWaterAfrica.PNG',
    liveLink: 'plasmwater.vercel.app',
    githubLink: 'https://github.com/aizocraft/pwa',
    year: '2024'
  },
  {
    title: 'MkulimaHub',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Real-time', 'Video Call', 'Mpesa'],
    desc: 'Platform connecting farmers to experts with realtime weather, discussion forum, video calls, and Mpesa integration.',
    category: 'Full Stack',
    features: ['Real-time Weather', 'Discussion Forum', 'Video Calls', 'Mpesa Integration'],
    stats: 'Empowering Farmers',
    accentColor: 'from-green-500 to-emerald-500',
    image: '/mkulimahub.PNG',
    liveLink: 'mkulimahub.vercel.app',
    githubLink: 'https://github.com/aizocraft/mkulimahub',
    year: '2024'
  },
  {
    title: 'Mastered Delights',
    tech: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    desc: 'Online cake shop with shopping cart, WhatsApp checkout, and beautiful design.',
    category: 'Web Development',
    features: ['Shopping Cart', 'WhatsApp Checkout', 'Beautiful Design', 'Responsive'],
    stats: 'Sweet Success',
    accentColor: 'from-pink-500 to-rose-500',
    image: '/MasteredDelights.PNG',
    liveLink: 'mastered-delights.vercel.app',
    githubLink: 'https://github.com/aizocraft/mastered-delights',
    year: '2024'
  },
  {
    title: 'Kenya Weather App',
    tech: ['Python', 'API', 'Data Visualization', 'Real-time'],
    desc: 'Weather application providing real-time data and forecasts for Kenyan locations.',
    category: 'Data Science',
    features: ['Real-time Data', 'Forecasts', 'Location-based', 'Visualization'],
    stats: 'Real-time Updates',
    accentColor: 'from-purple-500 to-pink-500',
    image: '/KenyaWeatherApp.PNG',
    liveLink: 'https://kenyaweather-py.onrender.com/',
    githubLink: 'https://github.com/aizocraft/KenyaWeather.py',
    year: '2025'
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Full Stack', 'Data Science'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-cyan-600/20' : 'bg-cyan-400/10'
        }`}></div>
        <div className={`absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-purple-600/20' : 'bg-purple-400/10'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className={`w-2 h-10 rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-b from-cyan-400 to-blue-400' : 'bg-gradient-to-b from-blue-500 to-purple-500'
            }`}></div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${
              theme === 'dark' ? 'from-white via-cyan-100 to-blue-100' : 'from-gray-900 via-blue-800 to-purple-800'
            } bg-clip-text text-transparent tracking-tight`}>
              Featured Work
            </h2>
            <div className={`w-2 h-10 rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-b from-blue-400 to-cyan-400' : 'bg-gradient-to-b from-purple-500 to-blue-500'
            }`}></div>
          </div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcasing innovative solutions with cutting-edge technology and superior user experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                  : theme === 'dark'
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                    : 'bg-white/50 text-gray-700 hover:bg-white/80 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`absolute -inset-3 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 ${
                project.accentColor.split(' ')[0]
              }`}></div>

              <div className={`relative rounded-2xl overflow-hidden border backdrop-blur-xl transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-gray-700/50'
                  : 'bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 border-gray-200/70'
              } ${hoveredProject === index ? 'scale-[1.02] -translate-y-1' : ''}`}>
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' ? 'from-gray-900 via-gray-900/60 to-transparent' : 'from-white via-white/60 to-transparent'
                  }`}></div>
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                      theme === 'dark' ? 'bg-black/40 text-white' : 'bg-white/40 text-gray-800'
                    }`}>
                      {project.category}
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                      theme === 'dark' ? 'bg-black/40 text-cyan-300' : 'bg-white/40 text-blue-600'
                    }`}>
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm ${
                      theme === 'dark' ? 'bg-black/40 text-cyan-300' : 'bg-white/40 text-cyan-700'
                    }`}>
                      <Zap className="w-4 h-4" />
                      <span className="font-bold text-sm">{project.stats}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                    <div className={`w-12 h-1 rounded-full mb-4 bg-gradient-to-r ${project.accentColor}`}></div>
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>{project.desc}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-110 ${
                            theme === 'dark'
                              ? 'bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/50'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.accentColor}`}></div>
                          <span className={`text-xs ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200/20 dark:border-gray-700/30">
                    <a
                      href={project.githubLink}
                      className={`group/btn flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span className="text-sm">View Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      className={`group/btn flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r ${project.accentColor} text-white hover:shadow-lg`}
                    >
                      <span className="text-sm">Live Preview</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 rounded-tl-2xl transition-all duration-300 ${
                  theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-400/50'
                } ${hoveredProject === index ? 'border-cyan-400 scale-125' : ''}`}></div>
                <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 rounded-tr-2xl transition-all duration-300 ${
                  theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-400/50'
                } ${hoveredProject === index ? 'border-cyan-400 scale-125' : ''}`}></div>
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 rounded-bl-2xl transition-all duration-300 ${
                  theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-400/50'
                } ${hoveredProject === index ? 'border-cyan-400 scale-125' : ''}`}></div>
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 rounded-br-2xl transition-all duration-300 ${
                  theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-400/50'
                } ${hoveredProject === index ? 'border-cyan-400 scale-125' : ''}`}></div>

                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${
                    theme === 'dark' ? 'from-cyan-400/10 to-blue-400/10 border-cyan-400/20' : 'from-blue-400/10 to-purple-400/10 border-blue-400/20'
                  }`}></div>
                </div>
              </div>

              {hoveredProject === index && (
                <>
                  <div className="absolute -top-2 -right-2 z-20">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-once" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 z-20">
                    <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-once" style={{ animationDelay: '0.2s' }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className={`inline-flex items-center gap-4 px-8 py-5 rounded-2xl backdrop-blur-xl border ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700/50'
              : 'bg-gradient-to-r from-white/50 to-gray-50/50 border-gray-200'
          }`}>
            <Eye className={`w-5 h-5 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
            }`} />
            <p className={`font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Want to see more? Check out my{' '}
              <a href="#" className={`font-bold hover:underline ${
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                GitHub
                <ChevronRight className="inline w-4 h-4 ml-1" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin-once {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        .animate-spin-once {
          animation: spin-once 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}