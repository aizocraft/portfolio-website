import { Mail, MapPin, Phone, Send, Clock, CheckCircle, Linkedin, Github, Twitter, AlertCircle, X, Activity } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { sendContactEmails, initEmailJS } from "../../../services/emailService";

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

const contactInfoData: ContactInfo[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "isaacngatho.dev@gmail.com",
    href: "mailto:isaacngatho.dev@gmail.com",
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

const socialLinksData: SocialLink[] = [
  { name: "GitHub", icon: "Github", url: "https://github.com/aizocraft" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/kariuki-isaac" },
  { name: "Twitter", icon: "Twitter", url: "https://x.com/aizotech" },
];

const availabilityData = {

  message:
    "Currently available for freelance projects and full-time opportunities. Let's create something amazing together!",
  responseTime: "Response within 24 hours",
};

const iconMap: Record<string, any> = {
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Linkedin,
  Github,
  Twitter,
};

const getIcon = (iconName: string, className: string = "w-5 h-5") => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return <Mail className={className} />;
  return <IconComponent className={className} />;
};

const ToastNotification = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-xl ${
        type === "success"
          ? "bg-[#c2d8c4]/15 border-[#c2d8c4]/30 text-[#222222]"
          : "bg-[#c2d8c4]/15 border-[#c2d8c4]/30 text-[#222222]"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#222222]" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#222222]" />
      )}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Close toast"
        type="button"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    initEmailJS();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
        return "";
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.length < 3) return "Subject must be at least 3 characters";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 2000) return "Message must be less than 2000 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    let hasError = false;

    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      setToast({ message: "Please fix the errors in the form", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await sendContactEmails(formData);

      if (result.success) {
        setSubmitStatus("success");
        setToast({
          message: result.message || "Message sent successfully! I'll get back to you soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setToast({ message: result.message || "Failed to send message. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setToast({ message: "An unexpected error occurred. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-[#222222] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.08, 1], x: [0, 35, 0], y: [0, -18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-[#c2d8c4]/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, -35, 0], y: [0, 18, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#c2d8c4]/15 rounded-full blur-3xl"
          />
        </div>

        <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#222222] dark:text-[#c2d8c4] mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-0.5 bg-[#c2d8c4]/70 mx-auto mb-5" />
           
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                {contactInfoData.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.label === "Location" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-white/70 dark:bg-[#c2d8c4]/5 border border-[#c2d8c4]/25 p-4 rounded-xl hover:bg-white/90 dark:hover:bg-[#c2d8c4]/10 transition-all duration-300"
                    whileHover={{ x: 6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-11 h-11 bg-[#c2d8c4]/15 dark:bg-[#c2d8c4]/10 rounded-lg flex items-center justify-center border border-[#c2d8c4]/20 group-hover:border-[#c2d8c4]/35 transition-all duration-300">
                      {getIcon(info.icon, "w-5 h-5 text-[#222222] dark:text-[#c2d8c4]")}
                    </div>
                    <div>
                      <p className="text-xs text-[#222222]/60 mb-0.5 dark:text-[#c2d8c4]/60">{info.label}</p>
                      <p className="font-medium text-[#222222] dark:text-[#c2d8c4] text-sm sm:text-base">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="relative overflow-hidden bg-[#222222] rounded-2xl p-6 text-[#c2d8c4] border border-[#c2d8c4]/20 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c2d8c4]/15 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Availability
                  </h3>
                  <p className="text-sm text-[#c2d8c4]/80 mb-4 leading-relaxed">{availabilityData.message}</p>
                  
                </div>
              </motion.div>

              <div className="flex gap-3">
                {socialLinksData.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                    className="w-10 h-10 bg-[#222222]/5 dark:bg-[#c2d8c4]/5 border border-[#c2d8c4]/25 rounded-xl flex items-center justify-center hover:bg-[#c2d8c4]/15 transition-all duration-300 group"
                    whileHover={{ y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getIcon(social.icon, "w-4 h-4 text-[#222222] dark:text-[#c2d8c4]")}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/70 dark:bg-[#c2d8c4]/5 border border-[#c2d8c4]/25 rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#222222] dark:text-[#c2d8c4] mb-2">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#222222]/70 dark:text-[#c2d8c4]/70 mb-2">
                        Full Name <span className="text-[#c2d8c4]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 bg-white/80 dark:bg-[#222222]/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all text-[#222222] dark:text-[#c2d8c4] placeholder:text-[#222222]/40 dark:placeholder:text-[#c2d8c4]/30 ${
                          errors.name
                            ? "border-red-500"
                            : "border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20"
                        }`}
                        placeholder="John Doe"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-500 mt-1"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#222222]/70 dark:text-[#c2d8c4]/70 mb-2">
                        Email Address <span className="text-[#c2d8c4]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 bg-white/80 dark:bg-[#222222]/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all text-[#222222] dark:text-[#c2d8c4] placeholder:text-[#222222]/40 dark:placeholder:text-[#c2d8c4]/30 ${
                          errors.email
                            ? "border-red-500"
                            : "border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20"
                        }`}
                        placeholder="john@gmail.com"
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-500 mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#222222]/70 dark:text-[#c2d8c4]/70 mb-2">
                      Subject <span className="text-[#c2d8c4]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 bg-white/80 dark:bg-[#222222]/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all text-[#222222] dark:text-[#c2d8c4] placeholder:text-[#222222]/40 dark:placeholder:text-[#c2d8c4]/30 ${
                        errors.subject
                          ? "border-red-500"
                          : "border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20"
                      }`}
                      placeholder="Project Inquiry"
                    />
                    <AnimatePresence>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-red-500 mt-1"
                        >
                          {errors.subject}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#222222]/70 dark:text-[#c2d8c4]/70 mb-2">
                      Message <span className="text-[#c2d8c4]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full px-4 py-2.5 bg-white/80 dark:bg-[#222222]/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c2d8c4] focus:border-transparent transition-all resize-none text-[#222222] dark:text-[#c2d8c4] placeholder:text-[#222222]/40 dark:placeholder:text-[#c2d8c4]/30 ${
                        errors.message
                          ? "border-red-500"
                          : "border-[#c2d8c4]/30 dark:border-[#c2d8c4]/20"
                      }`}
                      placeholder="Tell me about your project..."
                    />

                    <div className="flex justify-between items-center mt-1">
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-500"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <span className="text-xs text-[#222222]/40 dark:text-[#c2d8c4]/40">
                        {formData.message.length}/2000
                      </span>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#222222] text-[#c2d8c4] px-6 py-3 rounded-xl border border-[#c2d8c4]/20 hover:shadow-lg hover:shadow-[#c2d8c4]/20 transition-all duration-300 flex items-center justify-center gap-2 font-medium disabled:opacity-70 disabled:cursor-not-allowed group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#c2d8c4] border-t-transparent rounded-full animate-spin" />
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

                  <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="flex -space-x-2">
                      {[Mail, Clock, CheckCircle].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-[#c2d8c4]/20 flex items-center justify-center ring-2 ring-white/80 dark:ring-[#222222]"
                        >
                          <Icon className="w-3 h-3 text-[#c2d8c4]" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#222222]/50 dark:text-[#c2d8c4]/60">
                      Your information is safe and will be used only to respond to your inquiry
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast && (
          <ToastNotification
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

