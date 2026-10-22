import React from "react";
import { MessageSquareText, ListTodo, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1. Discuss",
    description: "Understand your goals and requirements.",
    icon: <MessageSquareText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
  },
  {
    step: "2. Plan",
    description: "Create a clear roadmap and timeline.",
    icon: <ListTodo className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
  },
  {
    step: "3. Build",
    description: "Develop, test and iterate with regular updates.",
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
  },
  {
    step: "4. Launch",
    description: "Deploy and support your project.",
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
  },
];

function Process() {
  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-3 sm:mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
            OUR PROCESS
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          From idea to launch
        </h2>

        <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
          A simple and transparent process to bring your vision to life.
        </p>
      </div>

      {/* Steps with connecting dashed line */}
      <div className="relative mt-6 sm:mt-8">
        {/* Horizontal dashed line on desktop */}
        <div className="hidden md:block absolute top-7 left-[12%] right-[12%] border-t-2 border-dashed border-slate-300 -z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex sm:flex-col items-center sm:text-center p-4 sm:p-0 rounded-2xl sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/70 shadow-xs sm:shadow-none gap-4 sm:gap-0 group"
            >
              {/* Step Circle */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200 shadow-xs sm:shadow-sm flex items-center justify-center group-hover:border-cyan-500 group-hover:shadow-md transition-all duration-300 shrink-0">
                {item.icon}
              </div>

              <div className="text-left sm:text-center">
                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base sm:text-lg sm:mt-5 tracking-tight group-hover:text-cyan-600 transition-colors">
                  {item.step}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2 max-w-[200px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
