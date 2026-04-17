import { useState, useEffect } from "react";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#222222]/80 backdrop-blur-xl shadow-lg shadow-[#c2d8c4]/10 dark:shadow-black/20 border-b border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#c2d8c4] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src="/aizotech.png"
                alt="Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.className = "w-10 h-10 lg:w-12 lg:h-12 bg-[#c2d8c4] rounded-xl flex items-center justify-center";
                    fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#222222]"><path d="M2 12h4l3-9 3 9h4"/><path d="M2 12h20"/><path d="M12 21v-9"/></svg>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-base lg:text-lg text-[#222222] dark:text-white leading-tight">
                Isaac Kariuki
              </span>
              
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#222222]/70 dark:text-white/70 hover:text-[#222222] dark:hover:text-white transition-all duration-300 font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-[#c2d8c4]/20 dark:hover:bg-[#c2d8c4]/10 relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#c2d8c4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-lg bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 hover:bg-[#c2d8c4]/30 dark:hover:bg-[#c2d8c4]/20 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-[#222222] dark:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-[#222222]" />
              )}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="ml-2 bg-[#222222] dark:bg-[#c2d8c4] text-white dark:text-[#222222] px-5 py-2 rounded-lg hover:bg-[#c2d8c4] dark:hover:bg-white hover:text-[#222222] transition-all duration-300 hover:shadow-lg hover:shadow-[#c2d8c4]/30 dark:hover:shadow-[#c2d8c4]/20 hover:scale-105 text-sm lg:text-base font-medium"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[#c2d8c4]/20 hover:bg-[#c2d8c4]/30 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-[#222222]" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-[#c2d8c4]/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#222222] dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-[#222222] dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#222222]/95 backdrop-blur-xl border-t border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[#222222]/70 dark:text-white/70 hover:text-[#222222] dark:hover:text-white hover:bg-[#c2d8c4]/20 dark:hover:bg-[#c2d8c4]/10 rounded-lg transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#222222] dark:bg-[#c2d8c4] text-white dark:text-[#222222] px-5 py-3 rounded-lg hover:bg-[#c2d8c4] dark:hover:bg-white hover:text-[#222222] transition-all duration-300 font-medium mt-4"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}