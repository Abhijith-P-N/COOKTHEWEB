import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What web development services does COOKTHEWEB offer?",
    answer:
      "COOKTHEWEB offers end-to-end web development services including custom websites, web applications, e-commerce platforms, progressive web apps (PWAs), landing pages, and SaaS products. We build with modern technologies like React, Next.js, Node.js, and Tailwind CSS to deliver lightning-fast, SEO-optimized, and mobile-responsive digital experiences.",
  },
  {
    question: "How much does it cost to build a website with COOKTHEWEB?",
    answer:
      "Our website development packages start from ₹9,999 for starter websites and scale based on complexity, features, and custom requirements. We offer transparent pricing with no hidden costs. Contact us for a free consultation and detailed quote tailored to your project needs.",
  },
  {
    question: "Does COOKTHEWEB build mobile apps?",
    answer:
      "Yes. We develop cross-platform mobile solutions using React Native and modern web technologies. Our mobile apps are optimized for both Android and iOS, offering native-like performance, push notifications, offline support, and seamless integration with your existing web platform.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website takes 1–3 weeks, while complex web applications and e-commerce platforms can take 4–8 weeks depending on scope and features. We follow an agile process with regular updates, so you see progress at every stage from design to deployment.",
  },
  {
    question: "Which areas does COOKTHEWEB serve?",
    answer:
      "COOKTHEWEB is based in Palakkad, Kerala, India, and serves clients across Kerala, Karnataka, and all of India. We also work with international clients remotely. Whether you're a local startup in Palakkad or an enterprise in Bangalore, we deliver the same world-class digital solutions.",
  },
  {
    question: "Do you provide SEO and website maintenance after launch?",
    answer:
      "Absolutely. Every website we build is SEO-optimized from day one with proper meta tags, structured data, fast load times, and mobile responsiveness. Post-launch, we offer ongoing maintenance plans covering security updates, performance monitoring, content updates, and continuous SEO improvements to help you rank higher on Google.",
  },
  {
    question: "What technologies does COOKTHEWEB use?",
    answer:
      "We use a modern, production-grade tech stack: React 19, Next.js, Vite, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, Firebase, and cloud platforms like Vercel, Netlify, and AWS. We pick the best tools for each project to maximize performance, security, and scalability.",
  },
  {
    question: "How do I get started with COOKTHEWEB?",
    answer:
      "Getting started is simple. Reach out to us through our contact form, WhatsApp (+91 79072 94980), or email (cooktheweb.in@gmail.com). We'll schedule a free consultation to understand your goals, then provide a clear roadmap and quote. Once approved, we begin designing and building your project immediately.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-3 sm:mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
            FAQ
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          Quick answers to common questions about our web development, app development, and digital services.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-50 group-hover:border-cyan-200/60 group-hover:text-cyan-600 text-slate-600 transition-all">
                  <HelpCircle size={18} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {faq.question}
                </h3>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-400 group-hover:text-cyan-500 transition-all duration-300 ${
                  openIndex === index ? "rotate-180 text-cyan-500" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="pl-12 sm:pl-14">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
