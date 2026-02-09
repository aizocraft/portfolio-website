import { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageSquare, User, Paperclip, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending....");
    const formDataToSend = new FormData(e.target as HTMLFormElement);
    formDataToSend.append("access_key", "c60950a6-f19d-465f-b72f-681e1ab34cf9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (e.target as HTMLFormElement).reset();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setResult("Error");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["kariukiisaac911@gmail.com"],
      accent: "from-cyan-500 to-blue-500",
      action: "mailto:kariukiisaac911@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+254 741 653 862", "Available Mon-Fri"],
      accent: "from-emerald-500 to-green-500",
      action: "tel:+254741653862"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Nyeri, Kenya", "Remote & On-site"],
      accent: "from-purple-500 to-pink-500",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-cyan-600/30' : 'bg-cyan-400/20'
        }`}></div>
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-purple-600/30' : 'bg-purple-400/20'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 2 === 0 ? 'animate-float' : 'animate-float-reverse'} ${
              theme === 'dark' ? 'text-gray-700/20' : 'text-gray-300/20'
            }`}
            style={{
              top: `${15 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <MessageSquare className="w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className={`w-2 h-10 rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-b from-cyan-400 to-blue-400' : 'bg-gradient-to-b from-blue-500 to-purple-500'
            }`}></div>
            <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${
              theme === 'dark' ? 'from-white via-cyan-100 to-blue-100' : 'from-gray-900 via-blue-800 to-purple-800'
            } bg-clip-text text-transparent`}>
              Let's Connect
            </h2>
            <div className={`w-2 h-10 rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-b from-blue-400 to-cyan-400' : 'bg-gradient-to-b from-purple-500 to-blue-500'
            }`}></div>
          </div>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className={`rounded-3xl p-8 backdrop-blur-xl border h-full ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50' 
                : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500`}>
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Get In Touch</h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>Multiple ways to reach me</p>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className={`group block p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600'
                        : 'bg-white/50 border-gray-200 hover:bg-white/80 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${info.accent} group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className={`text-sm ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>{detail}</p>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 mt-2 ${
                        theme === 'dark' ? 'text-gray-500 group-hover:text-cyan-400' : 'text-gray-400 group-hover:text-blue-500'
                      } transition-all group-hover:translate-x-2`} />
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className={`mt-8 p-5 rounded-2xl border backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/20' 
                  : 'bg-gradient-to-r from-cyan-100/50 to-blue-100/50 border-cyan-300/50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-500/10'
                  }`}>
                    <CheckCircle className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                    }`}>Currently Available</p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>For new projects and collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50' 
                : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200'
            }`}>
              {/* Form Header */}
              <div className={`p-8 border-b ${
                theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Send a Message</h3>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Fill out the form below and I'll get back to you soon</p>
                  </div>
                  {result && (
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-white animate-fade-in ${
                      result === "Form Submitted Successfully"
                        ? "bg-gradient-to-r from-emerald-500 to-green-500"
                        : result === "Error"
                        ? "bg-gradient-to-r from-red-500 to-red-600"
                        : "bg-gradient-to-r from-blue-500 to-blue-600"
                    }`}>
                      {result === "Form Submitted Successfully" && <CheckCircle className="w-5 h-5" />}
                      <span className="font-medium">{result}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors group-focus-within:text-blue-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Your Name
                        </div>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-5 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          theme === 'dark'
                            ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/30'
                            : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors group-focus-within:text-blue-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </div>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-5 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          theme === 'dark'
                            ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/30'
                            : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/30'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className={`block text-sm font-medium mb-3 transition-colors group-focus-within:text-blue-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Subject
                      </div>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/30'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                      placeholder="Project inquiry, collaboration, or question"
                    />
                  </div>

                  <div className="group">
                    <label className={`block text-sm font-medium mb-3 transition-colors group-focus-within:text-blue-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Paperclip className="w-4 h-4" />
                        Your Message
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-5 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/30'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                      placeholder="Tell me about your project, timeline, and requirements..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200/20 dark:border-gray-700/30">
                    <div className="flex items-center gap-3">
                      <Sparkles className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-blue-500'
                      }`} />
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        I typically respond within 24 hours
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={result === "Sending...."}
                      className={`group relative px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                      }`}
                    >
                      {result === "Sending...." ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          Send Message
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 rounded-tl-3xl ${
                theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-400/50'
              }`}></div>
              <div className={`absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 rounded-tr-3xl ${
                theme === 'dark' ? 'border-cyan-400/50' : 'border-blue-400/50'
              }`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float-reverse {
          animation: float-reverse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}