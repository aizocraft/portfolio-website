import { useState, useEffect, useCallback } from "react";
import { Menu, X,  Moon, Sun, Home, User, Code, FolderGit2, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Handle scroll events for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }, []);

  const navItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Skills", id: "skills", icon: Code },
    { label: "Projects", id: "projects", icon: FolderGit2 },
    { label: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#1a1a1e]/90 backdrop-blur-2xl shadow-2xl border-b border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20"
            : "bg-white/40 dark:bg-[#1a1a1e]/40 backdrop-blur-md border-b border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10"
        }`}
      >
        {/* Animated gradient line at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c2d8c4] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group cursor-pointer relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-[#c2d8c4] rounded-xl blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
             
                  <img
                    src="/aizotech.png"
                    alt="Logo"
                    className="w-8 h-8 rounded-full relative z-10"
                  />
                <motion.div
                  className="absolute -inset-1 rounded-xl bg-[#c2d8c4]/20 blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col items-start">
                <motion.span
                  className="font-bold text-base lg:text-lg text-gray-900 dark:text-white leading-tight"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Isaac Kariuki
                </motion.span>

              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`relative px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? "text-[#c2d8c4]" : "group-hover:text-[#c2d8c4]"
                      }`} />
                      <span className="text-sm lg:text-base font-medium">{item.label}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    {!isActive && isHovered === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-[#c2d8c4]/10 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-[#c2d8c4]/5 blur-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered === item.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                );
              })}
              
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="relative ml-2 p-2 rounded-lg bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 hover:bg-[#c2d8c4]/30 dark:hover:bg-[#c2d8c4]/20 transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c2d8c4]/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5 text-[#c2d8c4]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Hire Me Button */}
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="relative ml-2 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-[#c2d8c4] dark:to-[#b8d4ba] text-white dark:text-gray-900 px-5 py-2 rounded-lg font-medium overflow-hidden group shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] dark:from-white dark:to-white/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button and Dark Mode Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-[#c2d8c4]/20 hover:bg-[#c2d8c4]/30 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </motion.button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[#c2d8c4]/20 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-[#1a1a1e]/95 backdrop-blur-xl border-t border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                        isActive
                          ? "bg-[#c2d8c4]/20 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-white/70 hover:bg-[#c2d8c4]/10 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? "text-[#c2d8c4]" : "group-hover:text-[#c2d8c4]"
                      }`} />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="ml-auto w-1 h-6 bg-[#c2d8c4] rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-[#c2d8c4] dark:to-[#b8d4ba] text-white dark:text-gray-900 px-5 py-3 rounded-lg font-medium mt-4 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c2d8c4] to-[#8fbc8f] z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </>
  );
}