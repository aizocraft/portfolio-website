import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

// Simple theme hook to use if ThemeContext isn't available
const useLocalTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
      localStorage.setItem('theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useLocalTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Download CV handler
  const handleDownloadCV = () => {
    // Replace with your actual CV file URL
    const cvUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Isaac_Kariuki_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">IK</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Isaac Kariuki</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
                         font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                       hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400 animate-spin-once" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>
            
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                       rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 
                       hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <Download size={18} />
              <span>CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 mt-2 pb-4">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
                           font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-4 px-4">
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                           hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon size={20} className="text-blue-600" />
                  )}
                </button>
                
                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                           rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 
                           hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

     
    </nav>
  );
}