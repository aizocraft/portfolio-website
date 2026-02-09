import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ChevronRight, Home, User, Layers, Mail, FileText } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', href: '#home', icon: Home },
    { id: 'about', label: 'About', href: '#about', icon: User },
    { id: 'projects', label: 'Projects', href: '#projects', icon: Layers },
    { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
  ];

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveItem(id);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Download CV handler
  const handleDownloadCV = () => {
    const cvUrl = '/Isaac-Kariuki-Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Isaac_Kariuki_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && e.target instanceof Element && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 py-2' 
          : 'bg-white/5 dark:bg-gray-900/5 backdrop-blur-lg py-3'
      }`}>
        <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-7xl">
          <div className="flex justify-between items-center h-14">
            {/* Logo - Compact for Mobile */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Outer glow effect */}
                <div className={`absolute -inset-3 sm:-inset-4 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-30 transition-all duration-700 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-blue-500/20' 
                    : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 dark:from-cyan-500/30 dark:to-blue-500/30'
                } group-hover:scale-110 group-hover:opacity-50`}></div>
                
                {/* Glass morphism container */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl 
                              bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/40 dark:to-gray-900/60 
                              border border-white/30 dark:border-gray-700/50 shadow-xl 
                              flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:to-blue-500/10"></div>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer"></div>
                  </div>
                  
                  {/* Logo SVG */}
                  <img 
                    src="/logo.svg" 
                    alt="IK Logo" 
                    className="w-5 h-5 sm:w-7 sm:h-7 relative z-10 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>
              </div>
              
              {/* Logo Text - Hidden on small mobile, shown on sm+ */}
              <div className="hidden sm:block relative">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 
                               dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 
                               bg-clip-text text-transparent tracking-tight">
                  Isaac
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                              dark:from-cyan-400 dark:to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-all duration-500 ease-out overflow-hidden group ${
                    activeItem === item.id
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {/* Background effect for active item */}
                  {activeItem === item.id && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-cyan-500/90 dark:to-blue-500/90 rounded-lg sm:rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -inset-1 blur-xl opacity-30 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 rounded-lg sm:rounded-xl"></div>
                    </>
                  )}
                  
                  {/* Hover effect */}
                  {activeItem !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 
                                  dark:from-cyan-500/0 dark:via-blue-500/0 dark:to-purple-500/0 
                                  group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10
                                  dark:group-hover:from-cyan-500/10 dark:group-hover:via-blue-500/10 dark:group-hover:to-purple-500/10
                                  rounded-lg sm:rounded-xl transition-all duration-500"></div>
                  )}
                  
                  {/* Text */}
                  <span className="relative flex items-center space-x-2">
                    <span className="relative z-10 text-sm sm:text-base">{item.label}</span>
                    <ChevronRight size={14} className={`transform transition-transform duration-300 ${
                      activeItem === item.id ? 'translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} />
                  </span>
                  
                  {/* Active indicator dot */}
                  {activeItem === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
                  )}
                </a>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`ml-3 sm:ml-4 p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  scrolled 
                    ? 'bg-white/20 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/50' 
                    : 'bg-white/30 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700/60'
                } backdrop-blur-sm shadow-lg hover:shadow-2xl`}
                aria-label="Toggle theme"
              >
                <div className="relative">
                  {theme === 'dark' ? (
                    <>
                      <Sun size={18} className="sm:size-[22px] text-yellow-400" />
                      <div className="absolute -inset-1.5 sm:-inset-2 bg-yellow-400/20 blur-lg sm:blur-xl rounded-full"></div>
                    </>
                  ) : (
                    <>
                      <Moon size={18} className="sm:size-[22px] text-blue-600" />
                      <div className="absolute -inset-1.5 sm:-inset-2 bg-blue-600/20 blur-lg sm:blur-xl rounded-full"></div>
                    </>
                  )}
                </div>
              </button>
              
              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="ml-3 sm:ml-4 relative group"
              >
                {/* Outer glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 rounded-lg sm:rounded-xl blur opacity-30 group-hover:opacity-70 transition-all duration-500"></div>
                
                {/* Button container */}
                <div className="relative px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 
                              text-white rounded-lg sm:rounded-xl font-semibold flex items-center space-x-2 sm:space-x-3 
                              transition-all duration-500 overflow-hidden group-hover:shadow-xl sm:group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer"></div>
                  </div>
                  
                  <Download size={16} className="sm:size-[18px] relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                  <span className="relative z-10 text-sm sm:text-base tracking-wide hidden sm:inline">Resume</span>
                  <span className="relative z-10 text-sm sm:text-base tracking-wide sm:hidden">CV</span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button - Always visible on mobile */}
            <button
              className="menu-button lg:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm 
                       border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 
                       hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={20} className="text-gray-800 dark:text-gray-200" />
                ) : (
                  <Menu size={20} className="text-gray-800 dark:text-gray-200" />
                )}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Always visible on mobile */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[90vw] max-w-md">
        <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/50 shadow-2xl p-2">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                    activeItem === item.id
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-cyan-500/20 dark:to-blue-500/20'
                      : 'hover:bg-white/10 dark:hover:bg-gray-800/30'
                  }`}
                >
                  <div className={`relative p-2 rounded-lg ${
                    activeItem === item.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500' 
                      : 'bg-white/20 dark:bg-gray-800/40'
                  }`}>
                    <Icon size={18} className={`${
                      activeItem === item.id 
                        ? 'text-white' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`} />
                    {activeItem === item.id && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
                    )}
                  </div>
                  <span className={`text-xs mt-1 font-medium ${
                    activeItem === item.id
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
            
            {/* Mobile Actions in Bottom Nav */}
            <div className="flex items-center space-x-1 pl-2 border-l border-white/20 dark:border-gray-700/30">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm 
                         border border-white/20 dark:border-gray-700/50 transition-all duration-300 
                         hover:scale-110 active:scale-95"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-blue-600" />
                )}
              </button>
              
              <button
                onClick={handleDownloadCV}
                className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 
                         text-white transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Download CV"
              >
                <FileText size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu - Enhanced */}
      <div className={`mobile-menu lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-xl transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Side Panel */}
        <div className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-gradient-to-b from-white/40 to-white/20 dark:from-gray-900/70 dark:to-gray-900/50 
                        backdrop-blur-2xl border-l border-white/30 dark:border-gray-700/50 shadow-3xl 
                        transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -left-12 top-5 p-3 rounded-xl bg-white/40 dark:bg-gray-800/60 backdrop-blur-sm 
                     border border-white/30 dark:border-gray-700/50 shadow-lg transition-all duration-300 
                     hover:scale-110 active:scale-95"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-800 dark:text-gray-200" />
          </button>
          
          {/* Profile Section */}
          <div className="p-6 border-b border-white/20 dark:border-gray-700/40">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/60 dark:to-gray-900/80 
                            border border-white/40 dark:border-gray-700/60 shadow-xl flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="IK Logo" 
                  className="w-6 h-6 filter drop-shadow-lg"
                />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                              dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Isaac Kariuki
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Full Stack Developer</p>
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeItem === item.id
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-cyan-500/20 dark:to-blue-500/20 border border-blue-500/20 dark:border-cyan-500/20'
                      : 'hover:bg-white/10 dark:hover:bg-gray-800/30'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeItem === item.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500' 
                      : 'bg-white/20 dark:bg-gray-800/40'
                  }`}>
                    <Icon size={18} className={`${
                      activeItem === item.id 
                        ? 'text-white' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`} />
                  </div>
                  <span className={`font-medium flex-1 ${
                    activeItem === item.id
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {item.label}
                  </span>
                  {activeItem === item.id && (
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400 animate-pulse"></div>
                  )}
                </a>
              );
            })}
          </div>
          
          {/* Actions Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20 dark:border-gray-700/40 space-y-3">
            <button
              onClick={handleDownloadCV}
              className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 
                       text-white rounded-xl font-semibold flex items-center justify-center space-x-3 
                       transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>
            
            <div className="flex items-center justify-between px-1">
              <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/20 dark:bg-gray-800/40 
                         backdrop-blur-sm border border-white/20 dark:border-gray-700/50 
                         transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={16} className="text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Light</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        /* Hide bottom nav on scroll down, show on scroll up */
        @media (max-width: 1024px) {
          .bottom-nav-hidden {
            transform: translateY(100%);
            opacity: 0;
          }

          .bottom-nav-visible {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}