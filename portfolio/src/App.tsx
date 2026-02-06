import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <div className="pt-16"> 
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <footer className="text-center py-12 text-gray-400 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <p className="mb-4">© {new Date().getFullYear()} Isaac Kariuki. Built with Vite, Tailwind CSS & TypeScript</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/aizocraft" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
              <a href="https://linkedin.com/in/isaackariuki" className="text-gray-400 hover:text-blue-400 transition">LinkedIn</a>
              <a href="mailto:kariukiisaac9110@gmail.com" className="text-gray-400 hover:text-blue-400 transition">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;