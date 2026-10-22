import React from "react";
import { ArrowRight, Layers, ShieldCheck, Target } from "lucide-react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-cyan-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-24 left-2 w-[220px] sm:w-[380px] h-[220px] sm:h-[380px] bg-teal-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
              DIGITAL SOLUTIONS STUDIO
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-slate-950 tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6">
            We build <br className="hidden sm:inline" />
            web experiences <br className="hidden sm:inline" />
            that create{" "}
            <span className="text-cyan-500 drop-shadow-xs">value.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
            Custom websites, web applications and digital solutions designed
            with performance, security and real-world impact.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href="#contact"
              className="bg-slate-950 hover:bg-black text-white px-7 py-3.5 rounded-2xl sm:rounded-full text-base font-semibold shadow-md sm:shadow-lg shadow-black/10 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 text-center"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 px-7 py-3.5 rounded-2xl sm:rounded-full text-base font-semibold shadow-xs transition-all duration-200 text-center"
            >
              Our Services
            </a>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-200/70">
            <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50/50 sm:bg-transparent border sm:border-0 border-slate-100">
              <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                <Layers size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Modern & Scalable
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Built for growth</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50/50 sm:bg-transparent border sm:border-0 border-slate-100">
              <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Secure by Design
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Best practices</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50/50 sm:bg-transparent border sm:border-0 border-slate-100">
              <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                <Target size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Focused on Results
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Business driven</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end mt-2 lg:mt-0"
        >
          {/* Subtle vibrant cyan blur glow behind laptop */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/25 to-teal-300/20 rounded-3xl blur-2xl -z-10" />

          <div className="relative group rounded-2xl overflow-hidden shadow-xl sm:shadow-[0_20px_50px_rgba(8,112,184,0.18)] border border-slate-200/60 bg-white w-full max-w-md sm:max-w-lg lg:max-w-none">
            <img
              src="/hero_laptop.jpg"
              alt="Ideas into Digital Products - Laptop display showcasing COOKTHEWEB code and solutions"
              className="w-full rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={675}
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
