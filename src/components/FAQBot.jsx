import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleQuestion, X, ChevronDown, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What web development services does COOKTHEWEB offer?",
    answer:
      "We offer end-to-end web development — custom websites, web apps, e-commerce platforms, PWAs, landing pages, and SaaS products built with React, Next.js, Node.js, and Tailwind CSS.",
  },
  {
    question: "How much does it cost to build a website?",
    answer:
      "Our packages start from ₹9,999 for starter websites and scale based on complexity and features. Contact us for a free, no-obligation quote.",
  },
  {
    question: "Does COOKTHEWEB build mobile apps?",
    answer:
      "Yes! We build cross-platform mobile apps using React Native, optimized for both Android and iOS with native-like performance.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical website takes 1–3 weeks. Complex web apps and e-commerce platforms take 4–8 weeks. We follow agile development with regular updates.",
  },
  {
    question: "Which areas does COOKTHEWEB serve?",
    answer:
      "We're based in Palakkad, Kerala, serving clients across Kerala, Karnataka, all of India, and internationally.",
  },
  {
    question: "Do you provide SEO and maintenance?",
    answer:
      "Every site we build is SEO-optimized from day one. We offer ongoing maintenance plans covering security updates, performance monitoring, and SEO improvements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via our contact form, WhatsApp (+91 79072 94980), or email (cooktheweb.in@gmail.com). We'll schedule a free consultation and get you a roadmap within 24 hours.",
  },
];

function FAQBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const panelRef = useRef(null);

  const filtered = searchQuery.trim()
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-40" ref={panelRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 left-0 w-[320px] sm:w-[360px] max-h-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-950 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <MessageCircleQuestion size={20} className="text-cyan-400" />
                <div>
                  <h3 className="text-white font-bold text-sm">Got Questions?</h3>
                  <p className="text-slate-400 text-[11px]">Quick answers below</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Close FAQ"
              >
                <X size={14} />
              </button>
            </div>

            {/* Search */}
            <div className="px-4 pt-3 pb-2 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
                <Search size={14} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveIndex(null);
                  }}
                  placeholder="Search questions..."
                  className="bg-transparent text-xs text-slate-700 placeholder:text-slate-400 outline-none w-full"
                />
              </div>
            </div>

            {/* FAQ List */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 scrollbar-thin">
              {filtered.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-6">
                  No matching questions found.
                </p>
              )}
              {filtered.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-100 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-3 p-3 text-left hover:bg-slate-50 transition-colors group"
                    aria-expanded={activeIndex === index}
                  >
                    <span className="text-xs font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180 text-cyan-500" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-3 pb-3">
                          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer link to full FAQ page */}
            <div className="px-4 py-3 border-t border-slate-100 shrink-0">
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <span>View all FAQs</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-slate-900 text-white shadow-slate-900/30"
            : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/30 hover:shadow-cyan-500/50"
        }`}
        aria-label="Toggle FAQ"
      >
        {isOpen ? <X size={20} /> : <MessageCircleQuestion size={20} />}
      </button>
    </div>
  );
}

export default FAQBot;
