import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
        <footer className="text-center py-12 text-gray-600 bg-white/50">
          <div className="container mx-auto px-4">
            <p className="mb-4">© {new Date().getFullYear()} My Portfolio. Built with Vite, Tailwind CSS & TypeScript</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;