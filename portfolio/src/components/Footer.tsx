import { Github, Linkedin, Mail, Heart, Sparkles, ArrowUp, ExternalLink, Home, User, Briefcase, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export default function Footer() {
  const { theme } = useTheme();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredQuick, setHoveredQuick] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/aizocraft",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/isaackariuki",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:kariukiisaac911@gmail.com",
      label: "Email",
      color: "hover:text-red-600 dark:hover:text-red-400",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800"
    }
  ];

  const quickLinks = [
    {
      icon: <Home className="w-5 h-5" />,
      href: "#home",
      label: "Home",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
      icon: <User className="w-5 h-5" />,
      href: "#about",
      label: "About",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      href: "#projects",
      label: "Projects",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "#contact",
      label: "Contact",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
      borderColor: "border-gray-200 dark:border-gray-700"
    }
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50 to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-2">



        {/* Social Links - Clear and Horizontal */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/30 hover:bg-gray-800/50'
                    : 'bg-white/30 hover:bg-white/50'
                } ${social.borderColor} ${social.bgColor}`}
                aria-label={social.label}
                onMouseEnter={() => setHoveredSocial(social.label)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div className={`flex items-center gap-3 ${
                  hoveredSocial === social.label ? 'scale-110' : 'scale-100'
                } transition-transform duration-300`}>
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 group-hover:bg-transparent'
                      : 'bg-gray-100 group-hover:bg-transparent'
                  }`}>
                    {social.icon}
                  </div>
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 group-hover:text-white'
                      : 'text-gray-700 group-hover:text-gray-900'
                  } ${social.color}`}>{social.label}</span>
                </div>
                <ExternalLink className={`w-3.5 h-3.5 ml-1 transition-all duration-300 ${
                  hoveredSocial === social.label
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-1'
                } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links - Clear and Horizontal */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {quickLinks.map((quick) => (
              <a
                key={quick.label}
                href={quick.href}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/30 hover:bg-gray-800/50'
                    : 'bg-white/30 hover:bg-white/50'
                } ${quick.borderColor} ${quick.bgColor}`}
                aria-label={quick.label}
                onMouseEnter={() => setHoveredQuick(quick.label)}
                onMouseLeave={() => setHoveredQuick(null)}
              >
                <div className={`flex items-center gap-3 ${
                  hoveredQuick === quick.label ? 'scale-110' : 'scale-100'
                } transition-transform duration-300`}>
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 group-hover:bg-transparent'
                      : 'bg-gray-100 group-hover:bg-transparent'
                  }`}>
                    {quick.icon}
                  </div>
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 group-hover:text-white'
                      : 'text-gray-700 group-hover:text-gray-900'
                  } ${quick.color}`}>{quick.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full max-w-2xl mx-auto my-8 ${
          theme === 'dark' ? 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800' : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200'
        }`}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <Sparkles className={`w-4 h-4 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`} />
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              © {new Date().getFullYear()} Isaac Kariuki
            </p>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>by Isaac</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={handleBackToTop}
            className={`group flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800/50'
                : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
            }`}
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r ${
              theme === 'dark' 
                ? 'group-hover:from-cyan-500 group-hover:to-blue-500' 
                : 'group-hover:from-blue-500 group-hover:to-purple-500'
            }`}>
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </div>
          </button>
        </div>
      </div>

      {/* Subtle Bottom Border */}
      <div className={`h-px w-full ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-gray-900 via-cyan-500/10 to-gray-900' 
          : 'bg-gradient-to-r from-white via-blue-500/10 to-white'
      }`}></div>
    </footer>
  );
}