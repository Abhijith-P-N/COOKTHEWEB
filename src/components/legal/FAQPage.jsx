import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SEO from "../SEO";

const faqs = [
  {
    category: "Services",
    items: [
      {
        question: "What web development services does COOKTHEWEB offer?",
        answer:
          "COOKTHEWEB offers end-to-end web development services including custom websites, web applications, e-commerce platforms, progressive web apps (PWAs), landing pages, and SaaS products. We build with modern technologies like React, Next.js, Node.js, and Tailwind CSS to deliver lightning-fast, SEO-optimized, and mobile-responsive digital experiences.",
      },
      {
        question: "Does COOKTHEWEB build mobile apps?",
        answer:
          "Yes. We develop cross-platform mobile solutions using React Native and modern web technologies. Our mobile apps are optimized for both Android and iOS, offering native-like performance, push notifications, offline support, and seamless integration with your existing web platform.",
      },
      {
        question: "Do you offer UI/UX design services?",
        answer:
          "Absolutely. Our design team creates clean, modern, and intuitive user interfaces that improve engagement and conversions. We handle everything from wireframes and prototypes to full design systems and brand identity, ensuring every pixel serves a purpose.",
      },
      {
        question: "Can you build e-commerce websites?",
        answer:
          "Yes, we specialize in building high-conversion e-commerce platforms with secure payment gateways, inventory management, order tracking, and mobile-optimized shopping experiences. We use modern frameworks to ensure your store loads fast and ranks well on search engines.",
      },
    ],
  },
  {
    category: "Pricing & Timeline",
    items: [
      {
        question: "How much does it cost to build a website with COOKTHEWEB?",
        answer:
          "Our website development packages start from ₹9,999 for starter websites and scale based on complexity, features, and custom requirements. We offer transparent pricing with no hidden costs. Contact us for a free consultation and detailed quote tailored to your project needs.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A typical business website takes 1–3 weeks, while complex web applications and e-commerce platforms can take 4–8 weeks depending on scope and features. We follow an agile process with regular updates, so you see progress at every stage from design to deployment.",
      },
      {
        question: "Do you offer free consultations?",
        answer:
          "Yes, we offer completely free initial consultations. We'll discuss your project goals, suggest the best approach, and provide a clear roadmap with a transparent quote — no commitments required.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers (NEFT/IMPS/UPI), Google Pay, PhonePe, and other digital payment methods. For larger projects, we offer milestone-based payment plans so you pay as the project progresses.",
      },
    ],
  },
  {
    category: "Technology",
    items: [
      {
        question: "What technologies does COOKTHEWEB use?",
        answer:
          "We use a modern, production-grade tech stack: React 19, Next.js, Vite, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, Firebase, and cloud platforms like Vercel, Netlify, and AWS. We pick the best tools for each project to maximize performance, security, and scalability.",
      },
      {
        question: "Will my website be mobile-responsive?",
        answer:
          "Every website we build is fully responsive and optimized for all screen sizes — mobile phones, tablets, laptops, and desktops. We follow a mobile-first design approach to ensure the best experience for all users.",
      },
      {
        question: "Do your websites load fast?",
        answer:
          "Speed is our priority. We engineer every website for sub-second load times with optimized assets, code-splitting, lazy loading, CDN delivery, and Lighthouse-audited performance scores. Fast websites rank higher, convert better, and keep users engaged.",
      },
    ],
  },
  {
    category: "SEO & Maintenance",
    items: [
      {
        question: "Do you provide SEO and website maintenance after launch?",
        answer:
          "Absolutely. Every website we build is SEO-optimized from day one with proper meta tags, structured data, fast load times, and mobile responsiveness. Post-launch, we offer ongoing maintenance plans covering security updates, performance monitoring, content updates, and continuous SEO improvements to help you rank higher on Google.",
      },
      {
        question: "Will my website rank on Google?",
        answer:
          "We implement comprehensive on-page SEO including meta tags, structured data (JSON-LD), sitemap, robots.txt, Open Graph tags, Core Web Vitals optimization, and regional keyword targeting. While rankings depend on many factors, our technical SEO foundation gives your site the best possible starting point.",
      },
      {
        question: "Do you offer hosting and domain services?",
        answer:
          "We guide you through domain registration and help you set up reliable, fast hosting. We deploy on modern platforms like Vercel, Netlify, and AWS for maximum uptime, speed, and security. Hosting costs are separate and typically very affordable.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "Which areas does COOKTHEWEB serve?",
        answer:
          "COOKTHEWEB is based in Palakkad, Kerala, India, and serves clients across Kerala, Karnataka, and all of India. We also work with international clients remotely. Whether you're a local startup in Palakkad or an enterprise in Bangalore, we deliver the same world-class digital solutions.",
      },
      {
        question: "How do I get started with COOKTHEWEB?",
        answer:
          "Getting started is simple. Reach out to us through our contact form, WhatsApp (+91 79072 94980), or email (cooktheweb.in@gmail.com). We'll schedule a free consultation to understand your goals, then provide a clear roadmap and quote. Once approved, we begin designing and building your project immediately.",
      },
      {
        question: "What is your development process?",
        answer:
          "We follow a 4-step agile process: (1) Discuss — understand your goals and requirements, (2) Plan — create a clear roadmap and timeline, (3) Build — develop, test, and iterate with regular updates, and (4) Launch — deploy, optimize, and provide post-launch support.",
      },
      {
        question: "Do you sign NDAs or contracts?",
        answer:
          "Yes. For all projects, we provide clear project agreements covering scope, timeline, deliverables, and confidentiality. We're happy to sign NDAs to protect your ideas and business information.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allItems = faqs.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filtered = searchQuery.trim()
    ? allItems.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <SEO
        title="FAQ — Frequently Asked Questions | COOKTHEWEB"
        description="Find answers to common questions about COOKTHEWEB's web development, app development, pricing, timeline, SEO, and digital services in Palakkad, Kerala, Karnataka, and India."
        canonical="https://cooktheweb.in/faq"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-20 sm:pb-24 flex-1 w-full">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
              <HelpCircle size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Everything you need to know about our services
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="mt-6 max-w-lg">
            <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)] focus-within:border-cyan-300 focus-within:shadow-[0_2px_16px_rgba(6,182,212,0.1)] transition-all">
              <Search size={18} className="text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a question..."
                className="bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none w-full"
              />
            </div>
          </div>
        </div>

        {/* Search Results Mode */}
        {filtered !== null ? (
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-400 text-sm">
                  No questions match your search. Try different keywords.
                </p>
              </div>
            )}
            {filtered.map((faq, index) => {
              const key = `search-${index}`;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                    aria-expanded={!!openItems[key]}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-50 group-hover:border-cyan-200/60 group-hover:text-cyan-600 text-slate-600 transition-all">
                        <HelpCircle size={18} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                          {faq.question}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-medium text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 group-hover:text-cyan-500 transition-all duration-300 ${
                        openItems[key] ? "rotate-180 text-cyan-500" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems[key] && (
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
              );
            })}
          </div>
        ) : (
          /* Category Mode */
          <div className="space-y-10 sm:space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={category.category}>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight mb-4 sm:mb-5 flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-6 rounded-full bg-cyan-500" />
                  {category.category}
                </motion.h2>

                <div className="space-y-3">
                  {category.items.map((faq, index) => {
                    const key = `${catIndex}-${index}`;
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 12 }}
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
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                          aria-expanded={!!openItems[key]}
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
                              openItems[key] ? "rotate-180 text-cyan-500" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {openItems[key] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                              }}
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
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              Still have questions?
            </h3>
            <p className="text-slate-500 text-sm mt-2 mb-5">
              We'd love to hear from you. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-colors shadow-lg"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/917907294980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-colors shadow-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
