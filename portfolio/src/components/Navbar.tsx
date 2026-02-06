import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">IK</span>
            </div>
            <span className="text-2xl font-bold text-white">Isaac Kariuki</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="https://github.com/aizocraft" className="text-gray-300 hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/isaackariuki" className="text-gray-300 hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105">
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/aizocraft" className="text-gray-300 hover:text-blue-400 transition">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/isaackariuki" className="text-gray-300 hover:text-blue-400 transition">
                  <Linkedin size={24} />
                </a>
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition">
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}