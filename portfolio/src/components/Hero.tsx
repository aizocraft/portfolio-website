export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse shadow-2xl">
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center transition-colors">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">IK</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Isaac Kariuki</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors">
          Computer Science student passionate about Full Stack Development, Networking, and IT Support. Building scalable web applications and harnessing technology to solve real-world challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1">
            Contact Me
          </a>
        </div>
      </div>
      <div className="mt-12 animate-bounce">
        <div className="text-gray-500 dark:text-gray-400 transition-colors">Scroll down</div>
        <div className="mx-auto w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center transition-colors">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 transition-colors"></div>
        </div>
      </div>
    </section>
  );
}
