import { useState, useEffect, useRef } from 'react';

// Animated Counter Component
function AnimatedCounter({ target, duration = 2000, suffix = "+" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up Intersection Observer to trigger animation when component is in viewport
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    let animationFrameId: number;

    const animateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime!;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50/95 to-blue-50/30 dark:from-gray-900 dark:via-gray-900/95 dark:to-blue-900/20 transition-colors duration-500"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-3 h-12 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400"></div>
              <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Hello, I'm</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-800 dark:text-white">Isaac</span>
              <span className="block text-gray-800 dark:text-white mt-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Kariuki
                </span>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
              Full Stack Developer & Network Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 lg:mb-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              Computer Science finalist passionate about building scalable web applications, 
              network solutions, and harnessing technology to solve real-world challenges.
              Currently specializing in Full Stack Development and IT Infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-cyan-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-cyan-600 dark:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="group px-8 py-4 rounded-xl border-2 border-gray-800 dark:border-gray-600 text-gray-800 dark:text-gray-300 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white hover:border-gray-800 dark:hover:border-gray-800"
              >
                <span className="flex items-center justify-center gap-3">
                  Contact Me
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Quick Stats - UPDATED WITH ANIMATED COUNTERS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
              <div className="text-center">
                <AnimatedCounter target={10} duration={1500} suffix="+" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={4} duration={2000} suffix="+" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={100} duration={2500} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image Container */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400 blur-xl opacity-30 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="finalai.png" 
                  alt="Isaac Kariuki"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center text-white font-bold shadow-lg animate-float">
                Dev
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                Net
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 lg:mt-20 flex flex-col items-center animate-bounce">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 tracking-wider">EXPLORE MORE</p>
          <div className="relative">
            <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400 rounded-full mt-2 animate-scroll"></div>
            </div>
            <div className="absolute -inset-4 rounded-full border border-gray-200 dark:border-gray-700 animate-ping-slow"></div>
          </div>
        </div>
      </div>


    </section>
  );
}