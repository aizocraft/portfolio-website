import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IK</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Isaac Kariuki</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Computer Science student passionate about creating innovative solutions through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/aizocraft"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/isaackariuki"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kariukiisaac9110@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Isaac Kariuki. Built with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1 animate-pulse" />{' '}
              using Vite, Tailwind CSS & TypeScript
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Designed & Developed by Isaac Kariuki</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
