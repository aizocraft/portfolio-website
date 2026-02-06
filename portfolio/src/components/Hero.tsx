export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">IK</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-400">Isaac Kariuki</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Computer Science student passionate about Full Stack Development, Networking, and IT Support. Building scalable web applications and harnessing technology to solve real-world challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:-translate-y-1 hover:shadow-lg">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
            Contact Me
          </a>
        </div>
      </div>
      <div className="mt-12 animate-bounce">
        <div className="text-gray-400">Scroll down</div>
        <div className="mx-auto w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
