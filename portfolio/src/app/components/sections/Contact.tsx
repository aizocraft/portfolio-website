import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle, Linkedin, Github, Twitter } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

// ============================================
// EDITABLE DATA - MODIFY HERE
// ============================================

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

// Contact information - EASILY EDITABLE
const contactInfoData: ContactInfo[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "kariukiisaac911@gmail.com",
    href: "mailto:kariukiisaac911@gmail.com",
  },
  {
    icon: "Phone",
    label: "Phone",
    value: "+254 741 653 862",
    href: "tel:+254741653862",
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

// Social links - EASILY EDITABLE
const socialLinksData: SocialLink[] = [
  { name: "GitHub", icon: "Github", url: "https://github.com/aizocraft" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/kariuki-isaac" },
  { name: "Twitter", icon: "Twitter", url: "https://x.com/aizotech" },
];

// Availability status
const availabilityData = {
  status: "Available for work",
  message: "Currently available for freelance projects and full-time opportunities. Let's create something amazing together!",
  responseTime: "Response within 24 hours",
};

// Icon mapping
const iconMap: Record<string, any> = {
  Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle, Linkedin, Github, Twitter
};

const getIcon = (iconName: string, className: string = "w-5 h-5") => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return <Mail className={className} />;
  return <IconComponent className={className} />;
};

// ============================================
// MAIN COMPONENT
// ============================================

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setSubmitStatus("idle"), 3000);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white via-[#c2d8c4]/5 to-white dark:from-[#1a1a1a] dark:via-[#222222]/20 dark:to-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c2d8c4]/10 dark:bg-[#c2d8c4]/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c2d8c4]/5 dark:bg-[#c2d8c4]/3 rounded-full blur-3xl" />
      
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#c2d8c4]/20 dark:bg-[#c2d8c4]/10 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-[#222222] dark:text-white" />
            <span className="text-sm font-semibold text-[#222222] dark:text-white">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#222222] dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-16 h-0.5 bg-[#c2d8c4] mx-auto mb-4" />
          <p className="text-[#222222]/60 dark:text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? I'd love to hear from you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfoData.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.label === "Location" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 p-4 rounded-xl hover:bg-white/80 dark:hover:bg-[#222222]/80 hover:shadow-lg hover:shadow-[#c2d8c4]/20 dark:hover:shadow-[#c2d8c4]/10 transition-all duration-300 hover:scale-105"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-11 h-11 bg-[#c2d8c4]/30 dark:bg-[#c2d8c4]/20 rounded-lg flex items-center justify-center group-hover:bg-[#c2d8c4] group-hover:rotate-12 transition-all duration-300">
                    {getIcon(info.icon, "w-5 h-5 text-[#222222] dark:text-white group-hover:text-[#222222]")}
                  </div>
                  <div>
                    <p className="text-xs text-[#222222]/50 dark:text-white/50 mb-0.5">{info.label}</p>
                    <p className="font-medium text-[#222222] dark:text-white text-sm sm:text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

                     {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gradient-to-br from-[#222222] to-[#2a2a2a] dark:from-[#222222] dark:to-[#1a1a1a] rounded-xl p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-3">Availability</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                {availabilityData.message}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 bg-[#c2d8c4] rounded-full animate-pulse" />
                <span className="text-sm font-medium">{availabilityData.status}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Clock className="w-3.5 h-3.5" />
                <span>{availabilityData.responseTime}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/60 dark:bg-[#222222]/60 backdrop-blur-lg border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-[#222222] dark:text-white mb-2">
                Send a Message
              </h3>

              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#222222]/70 dark:text-white/70 mb-2"
                    >
                      Full Name <span className="text-[#c2d8c4]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/80 dark:bg-[#1a1a1a]/80 border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all text-[#222222] dark:text-white placeholder:text-[#222222]/30 dark:placeholder:text-white/30"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#222222]/70 dark:text-white/70 mb-2"
                    >
                      Email Address <span className="text-[#c2d8c4]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/80 dark:bg-[#1a1a1a]/80 border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all text-[#222222] dark:text-white placeholder:text-[#222222]/30 dark:placeholder:text-white/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#222222]/70 dark:text-white/70 mb-2"
                  >
                    Subject <span className="text-[#c2d8c4]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white/80 dark:bg-[#1a1a1a]/80 border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all text-[#222222] dark:text-white placeholder:text-[#222222]/30 dark:placeholder:text-white/30"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#222222]/70 dark:text-white/70 mb-2"
                  >
                    Message <span className="text-[#c2d8c4]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-white/80 dark:bg-[#1a1a1a]/80 border border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all resize-none text-[#222222] dark:text-white placeholder:text-[#222222]/30 dark:placeholder:text-white/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#222222] dark:bg-[#c2d8c4] text-white dark:text-[#222222] px-6 py-3 rounded-xl hover:bg-[#c2d8c4] dark:hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:shadow-lg hover:shadow-[#c2d8c4]/30 dark:hover:shadow-[#c2d8c4]/20 hover:scale-105 group disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white dark:border-[#222222] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form success message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-[#c2d8c4]/20 rounded-xl text-center text-sm text-[#222222] dark:text-white"
                >
                  Thank you for reaching out! I'll respond within 24 hours.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}