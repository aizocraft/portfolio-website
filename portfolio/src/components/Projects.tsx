import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Plasma Water Africa Website',
    tech: 'HTML, CSS, JavaScript',
    desc: 'Corporate website that boosted client engagement by 40%. Features responsive design and modern UI.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'AgriCart E-commerce Platform',
    tech: 'React, Node.js, MongoDB',
    desc: 'Multi-vendor e-commerce platform with inventory and order management system for agricultural products.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Construction CMS/ERP System',
    tech: 'Full Stack Development',
    desc: 'Content Management System with ERP features for construction operations, including attendance tracking and inventory workflows.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Kenya Weather App',
    tech: 'Python',
    desc: 'Weather application providing real-time weather data and forecasts for Kenya locations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w-400&h-300&fit=crop',
    github: '#',
    live: '#'
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold text-center px-2">{project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 mb-3 text-sm font-medium">{project.tech}</p>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
