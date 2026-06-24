import {
  ExternalLink,
  Github,
  Network,
  ShoppingCart,
  MessageSquare,
  BarChart,
  Star,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Code2,
  Sparkles,
  Eye,
  Zap,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";

// ============================================
// EDITABLE DATA - MODIFY HERE
// ============================================

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; 
  technologies: string[];
  icon: string;
  github: string;
  live: string;
  featured: boolean;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
  category: string;
  year: string;
}

// Icon mapping
const iconMap: Record<string, any> = {
  Network, ShoppingCart, MessageSquare, BarChart, Star, TrendingUp, Users, Sparkles, Eye, Zap, Code2
};

// Projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Plasma Water Africa",
    description: "Corporate website for water solutions company showing services.",
    images: [
      "/portfolio/home.png",
      "/portfolio/services.png",
      "/portfolio/about.png",
      ],
    technologies: ["React", "Node.js",  "TailwindCSS"],
    icon: "Network",
    github: "https://githuhcom/aizocraft",
    live: "https://plasmawaterafrica.com",
    featured: true,
    stats: [
      { label: "Engagement", value: "+40%", icon: "TrendingUp" },
      { label: "Users", value: "2.5K+", icon: "Users" },
      { label: "Rating", value: "4.9", icon: "Star" },
    ],
    category: "Web Development",
    year: "2025",
  },
  {
    id: 2,
    title: "Plasma Shop",
    description: "E-commerce platform for selling plasma water products with real-time inventory tracking.",
    images: [
      "/pwa/cartpage.png",
      "/pwa/Home Page.png",
      "/pwa/dashboard.png",
      "/pwa/orders.png",
      "/pwa/featured.png",
      "/pwa/settings.png",
    
    ],
    technologies: ["Next.js", "Express", "PostgreSQL", "Stripe", "Redis"],
    icon: "ShoppingCart",
    github: "https://github.com/aizocraft/pwa",
    live: "https://plasmashop.com",
    featured: true,
    stats: [
      { label: "Sales", value: "+25%", icon: "TrendingUp" },
      { label: "Products", value: "100+", icon: "ShoppingCart" },
      { label: "Customers", value: "1K+", icon: "Users" },
    ],
    category: "E-Commerce",
    year: "2026",
  },
  {
    id: 3,
    title: "Mastered Delights Ecommerce",
    description: "Cake Shop with whatsapp integration, allowing customers to place orders directly ",
    images: [
       "masterdelights/Hero.png",
        "masterdelights/cart.png",
        "masterdelights/gallery.png",
          "masterdelights/contact.png",
    ],
    technologies: ["Html", "Css", "JavaScript"],
    icon: "ShoppingCart",
    github: "https://github.com/aizocraft/masterdelights",
    live: "https://mastereddelights.vercel.app",
    featured: false,
    stats: [
      { label: "Orders", value: "500+", icon: "TrendingUp" },
      { label: "Products", value: "50+", icon: "ShoppingCart" },
      { label: "Customers", value: "300+", icon: "Users" },
          
    ],
    category: "E-Commerce",
    year: "2024",
  },
  {
    id: 4,
    title: "Kenya Weather App",
    description: "Real-time weather application with interactive maps, 5-day forecast",
    images: [
     " kenyaweather/Capture1.png",
      "kenyaweather/Capture2.png",
      "kenyaweather/Detecting Location.png",
    ],
    technologies: ["Python", "Flask", "OpenWeather API", "Leaflet"],
    icon: "Sparkles",
    github: "https://github.com/aizocraft/kenyaweatherpy",
    live: "kenyaweather-py.onrender.com",
    featured: true,
    stats: [
      { label: "Locations", value: "50+", icon: "Eye" },
      { label: "Users", value: "1K+", icon: "Users" },
      { label: "Accuracy", value: "95%", icon: "Zap" },
    ],
   
    category: "Open Source",
    year: "2025",
  },
  /* Agripack
   {
    id: 5,
    title: "Agripack",
    description: "A platform for connecting farmers with buyers, providing real-time market information and facilitating transactions.",
    images: [
      "agripack/home.png",
      "agripack/report.png",

    ],
    technologies: ["React", "TypeScript", "Node.js", "Jest", "TailwindCSS"],
    icon: "Code2",
    github: "https://github.com/aizocraft/agripack",
    live: "https://agripack.vercel.app",
    featured: false,
    stats: [
      { 
        label: "Farmers Supported", value: "500+", icon: "Users"
        },
      { 
        label: "Farms Supported", value: "50+", icon: "TrendingUp"
        },
      { 
        label: "Users", value: "1K+", icon: "Users"
        },

        
          ],
    category: "E-Commerce",
    year: "2026",
  }, 
  */
];

const getIcon = (iconName: string, className: string = "w-5 h-5") => {
  const IconComponent = iconMap[iconName] || Code2;
  return <IconComponent className={className} />;
};

// ============================================
// LIGHTBOX COMPONENT
// ============================================

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
      onClick={onClose}
    >
<button
  onClick={onClose}
  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center shadow-lg hover:scale-110"
>
  <X className="w-5 h-5 text-white" />
</button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <motion.img
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        src={images[currentIndex]}
        alt={`Project view ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); }}
            className={`transition-all rounded-full ${
              idx === currentIndex ? 'w-8 h-2 bg-[#c2d8c4]' : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ============================================
// IMAGE SLIDER COMPONENT
// ============================================

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevSlide();
      else nextSlide();
    }
    setTouchStart(null);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div 
        className="relative overflow-hidden bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/10 cursor-pointer group/slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="aspect-[16/9] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              src={images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/slider:scale-110"
              onClick={openLightbox}
            />
          </AnimatePresence>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/60 via-transparent to-transparent opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 dark:bg-[#222222]/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#c2d8c4] hover:scale-110 transition-all shadow-lg opacity-0 group-hover/slider:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-[#222222] dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 dark:bg-[#222222]/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#c2d8c4] hover:scale-110 transition-all shadow-lg opacity-0 group-hover/slider:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-[#222222] dark:text-white" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-6 h-1.5 bg-[#c2d8c4]"
                    : "w-1.5 h-1.5 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <Lightbox
            images={images}
            currentIndex={currentIndex}
            onClose={() => setIsLightboxOpen(false)}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// ============================================
// PROJECT CARD COMPONENT
// ============================================

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-white dark:bg-[#222222]/80 backdrop-blur-sm border border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#c2d8c4]/20 dark:hover:shadow-[#c2d8c4]/10 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Slider */}
      <ImageSlider images={project.images} title={project.title} />

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10">
                {getIcon(project.icon, "w-4 h-4 text-[#222222] dark:text-white")}
              </div>
              <h3 className="text-xl font-bold text-[#222222] dark:text-white">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/40">
              <Calendar className="w-3 h-3" />
              <span>{project.year}</span>
            </div>
          </div>
          <p className="text-sm text-[#222222]/60 dark:text-white/60 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#c2d8c4]/20 dark:border-[#c2d8c4]/10 display:none">
          {project.stats.map((stat, statIndex) => (
            <div key={statIndex} className="text-center">
              <div className="flex justify-center mb-1 text-[#c2d8c4]">
                {getIcon(stat.icon, "w-4 h-4")}
              </div>
              <p className="text-base font-bold text-[#222222] dark:text-white">{stat.value}</p>
              <p className="text-xs text-[#222222]/50 dark:text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Code2 className="w-3.5 h-3.5 text-[#222222]/40 dark:text-white/40" />
            <span className="text-xs font-semibold text-[#222222]/60 dark:text-white/50 uppercase tracking-wide">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2.5 py-1 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 rounded-lg text-xs font-medium text-[#222222]/70 dark:text-white/70 hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] hover:text-[#222222] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2.5 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#222222] dark:bg-white text-white dark:text-[#222222] px-4 py-2.5 rounded-xl hover:bg-[#c2d8c4] dark:hover:bg-[#c2d8c4] hover:text-[#222222] transition-all flex items-center justify-center gap-2 text-sm font-medium group"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#c2d8c4] text-[#222222] px-4 py-2.5 rounded-xl hover:bg-[#222222] dark:hover:bg-white hover:text-white dark:hover:text-[#222222] transition-all flex items-center justify-center gap-2 text-sm font-medium group"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>

        {/* Featured Badge (inside content) */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-[#c2d8c4] text-[#222222] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["all", ...Array.from(new Set(projectsData.map((p) => p.category)))];
  const filteredProjects = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  const summaryStats = [
    { label: "Projects Completed", value: projectsData.length.toString() + "+" },
    { label: "Technologies", value: "20+" },
    { label: "Happy Clients", value: "12+" },
    { label: "Open Source", value: "3" },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c2d8c4]/10 dark:bg-[#c2d8c4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/3 rounded-full blur-3xl" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-4xl sm:text-5xl font-bold text-[#222222] dark:text-white mb-4">
            Portfolio Highlights
          </h2>
          <div className="w-16 h-0.5 bg-[#c2d8c4] mx-auto mb-4" />
          <p className="text-[#222222]/60 dark:text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Crafting innovative solutions that solve real-world problems
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 text-sm capitalize ${
                filter === category
                  ? "bg-[#222222] dark:bg-white text-white dark:text-[#222222] shadow-lg scale-105"
                  : "bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 text-[#222222]/70 dark:text-white/70 hover:bg-[#c2d8c4]/20 dark:hover:bg-[#c2d8c4]/10 hover:scale-105"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#222222]/60 dark:text-white/60">No projects found in this category.</p>
          </div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#222222] to-[#2a2a2a] dark:from-[#222222] dark:to-[#1a1a1a] rounded-2xl p-8 sm:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {summaryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1 text-[#c2d8c4]">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}