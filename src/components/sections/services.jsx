import React from "react";
import {
  Monitor,
  Smartphone,
  Layout,
  Code2,
  ShieldCheck,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Web Development",
    description:
      "High-performance websites and web applications tailored to your business goals.",
    icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Mobile Solutions",
    description:
      "Responsive and user-friendly web and mobile experiences for modern users.",
    icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, modern and intuitive designs that improve user engagement.",
    icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions to solve real business problems.",
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support, updates and performance optimization.",
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Deployment, domain setup and infrastructure guidance for a smooth launch.",
    icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-3 sm:mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
            OUR SERVICES
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          How we can help you
        </h2>

        <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          End-to-end digital solutions to help startups, businesses and
          individuals build, launch and grow online.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
          >
            <div>
              {/* Icon Container */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-200/60 transition-all duration-300 mb-5 sm:mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 sm:mb-3 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;