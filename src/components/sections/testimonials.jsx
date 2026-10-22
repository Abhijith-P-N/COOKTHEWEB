import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Abhinav",
    role: "moonpie.shop",
    initials: "AB",
    avatarBg: "from-cyan-500 to-blue-600",
    content:
      "COOKTHEWEB built our web platform with exceptional speed and precision. Their attention to detail in UX design and responsiveness helped us scale our customer conversions by over 40%.",
    project: "E-Commerce Platform",
  },
  {
    name: "Arshad",
    role: "layalifeast",
    initials: "AR",
    avatarBg: "from-teal-400 to-cyan-600",
    content:
      "Outstanding engineering and seamless communication. They transformed our complex business workflow into a sleek, scalable web application that our clients genuinely love using.",
    project: "Custom Software",
  },
  {
    name: "Nishad Kumar",
    role: "Tech Lead, Verdent Labs",
    initials: "NI",
    avatarBg: "from-blue-500 to-indigo-600",
    content:
      "Top-tier technical capability. From database architecture to modern frontend animations, the team delivered every milestone on time and exceeded our highest expectations.",
    project: "Enterprise System",
  },
  {
    name: "Flaming Studio",
    role: "Creative Director, Flaming Productions",
    initials: "FL",
    avatarBg: "from-emerald-500 to-teal-600",
    content:
      "The visual aesthetics and modern performance they delivered set our digital presence apart from competitors. Highly recommended for any brand looking for top quality.",
    project: "Digital Brand Experience",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-3 sm:mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
            CLIENT REVIEWS
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          Trusted by Industry Leaders
        </h2>

        <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
          See what our clients have to say about partnering with COOKTHEWEB.
        </p>
      </div>

      {/* 4 Testimonials in a single line on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 xl:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header with avatar, author info, and stars */}
              <div className="flex items-center justify-between gap-2.5 mb-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-cyan-600 transition-colors truncate">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 truncate block">
                      {t.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={12}
                      className="fill-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-4">
                “{t.content}”
              </p>
            </div>

            {/* Verified Project Info */}
            <div className="flex flex-col gap-1 text-xs font-medium text-slate-500 pt-3 border-t border-slate-100 mt-auto">
              <span className="text-slate-800 font-semibold text-[11px] truncate">
                {t.project}
              </span>
              <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                <CheckCircle2 size={13} className="shrink-0" />
                <span>Verified Client</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
