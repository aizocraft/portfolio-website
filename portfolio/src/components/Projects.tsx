import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    tech: 'React, TypeScript, Tailwind, Stripe',
    desc: 'Full-featured online store with cart, checkout, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    tech: 'Next.js 14, Prisma, PostgreSQL',
    desc: 'Productivity application with real-time updates and team collaboration.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-400&h-300&fit-crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Weather Dashboard',
    tech: 'React, OpenWeather API, Chart.js',
    desc: 'Real-time weather visualization with forecasts and interactive charts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w-400&h-300&fit-crop',
    github: '#',
    live: '#'
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm font-medium">{project.tech}</p>
                <p className="text-gray-700 mb-6">{project.desc}</p>
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
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