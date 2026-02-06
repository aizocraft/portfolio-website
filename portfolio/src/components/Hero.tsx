export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Alex</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Frontend Developer crafting beautiful, responsive web experiences with React, TypeScript, and modern tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:-translate-y-1">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
            Contact Me
          </a>
        </div>
      </div>
      <div className="mt-12 animate-bounce">
        <div className="text-gray-500">Scroll down</div>
        <div className="mx-auto w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}