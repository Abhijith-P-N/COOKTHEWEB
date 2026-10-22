import React from "react";
import { Code2, Layers, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Clean Code",
    subtitle: "Maintainable & scalable",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Modern Stack",
    subtitle: "Latest technologies",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Security First",
    subtitle: "Best practices",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Client Focused",
    subtitle: "Clear communication",
    icon: <HeartHandshake className="w-5 h-5 text-cyan-400" />,
  },
];

function WhyUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10 sm:my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0a0f18] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-800/80 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle cyan ambient glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
          {/* Left Column: Headline */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-400 uppercase">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Focused on <br className="hidden sm:inline" />
              quality, performance <br className="hidden sm:inline" />
              and long-term value.
            </h2>
          </div>

          {/* Right Column: 2x2 Features Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="flex items-center sm:items-start gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5 sm:mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhyUs;
