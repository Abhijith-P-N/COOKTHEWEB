import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowRight,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import WhatsappIcon from "../icons/WhatsappIcon";

function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwds6Xh1Z91cEJ_THXL7_AofKvu7QHdiN_JClKZ_miOOIJ6JtmnYqeRfKTdYXIaMfKC/exec";

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(
        () => setToast((t) => ({ ...t, show: false })),
        4000
      );
      return () => clearTimeout(timer);
    }
  }, [toast.show]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(form);
    const body = new URLSearchParams();

    body.append("name", formData.get("name") || "");
    body.append("email", formData.get("email") || "");
    body.append("details", formData.get("details") || "");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setToast({
        show: true,
        message:
          "Your message has been submitted. If it doesn't appear in our records, please contact us via WhatsApp.",
        type: "success",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setToast({
        show: true,
        message:
          "We couldn't confirm submission. Please contact us via WhatsApp.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 my-10 sm:my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0a0f18] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle ambient cyan glow */}
        <div className="absolute -top-24 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-400 uppercase">
                LET'S WORK TOGETHER
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a project in mind?
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-md leading-relaxed">
              Let's turn your ideas into a powerful digital product.
            </p>

            {/* Direct Contact Options */}
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 mt-8 sm:mt-10">
              <a
                href="mailto:cooktheweb.in@gmail.com"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">
                    Email
                  </span>
                  <span className="text-white font-semibold text-xs sm:text-sm truncate block group-hover:text-cyan-400 transition-colors">
                    info.cooktheweb@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/917907294980?text=Hello!%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsappIcon size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">
                    WhatsApp
                  </span>
                  <span className="text-white font-semibold text-xs sm:text-sm truncate block group-hover:text-cyan-400 transition-colors">
                    +91 79072 94980
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="bg-[#111724]/90 p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-800/90 shadow-xl flex flex-col gap-3.5 sm:gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#172030] border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#172030] border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <textarea
                name="details"
                placeholder="Tell us about your project..."
                rows="4"
                required
                className="w-full bg-[#172030] border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-400/20 flex items-center justify-center gap-2 text-base sm:text-sm tracking-wide active:scale-[0.99] disabled:opacity-70 cursor-pointer mt-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Toast Notification */}
            <AnimatePresence>
              {toast.show && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`mt-4 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${toast.type === "success"
                    ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                    : "bg-rose-950/80 text-rose-300 border border-rose-800"
                    }`}
                >
                  {toast.type === "success" ? (
                    <CheckCircle size={18} className="text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle size={18} className="text-rose-400 shrink-0" />
                  )}
                  <span>{toast.message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Connect;
