import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Mail, X, ArrowRight, User } from "lucide-react";

const founders = [
  {
    name: "Abhijith P N",
    role: "Founder & Lead Developer",
    bio: "Visionary full-stack engineer passionate about crafting scalable, high-performance web experiences and driving the technical vision of COOKTHEWEB. Specialized in modern React/Next.js architectures, secure backend systems, and surgical speed optimization.",
    image: "/Abhijith.png",
    linkedin: "https://www.linkedin.com/in/abhijith-pn-41a3b0327/",
    instagram: "https://www.instagram.com/a_bhi_j_i_th_/",
    email: "mailto:abhijithnaveen790@gmail.com",
  },
  {
    name: "Anfas Ul Arifeen N",
    role: "Founder & Creative Director",
    bio: "Creative designer ensuring every digital product is visually breathtaking, deeply intuitive, and aligned with user-centric principles. Expert in crafting immersive UI/UX experiences, responsive design systems, and stunning brand identities.",
    image: "/anfas.jpeg",
    linkedin: "https://www.linkedin.com/in/anfas-ul-arifeen-nasimudeen-062a77324/",
    instagram: "https://www.instagram.com/anfasularifeen/",
    email: "mailto:anfasularifeen.n@gmail.com",
  },
];

function Team() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  return (
    <section id="about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-3 sm:mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
            ABOUT COOKTHEWEB
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          Crafting Digital Excellence
        </h2>

        <div className="mt-4 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-left sm:text-center max-w-3xl mx-auto">
          <p>
            <strong className="text-slate-900">COOKTHEWEB</strong> is an elite digital solutions studio dedicated to transforming ambitious ideas into lightning-fast, highly secure, and beautifully engineered web experiences. We blend cutting-edge technology with meticulous design to build platforms that scale effortlessly and drive real business growth.
          </p>
          <p>
            From bespoke web applications and high-conversion e-commerce stores to robust custom software, our mission is to empower startups and enterprises with digital infrastructure that stands out and delivers unmatched performance.
          </p>
        </div>
      </div>

      {/* Co-Founders Heading & Name-only buttons */}
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Our Co-Founders
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Click on a founder's name to view their profile and photo.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => setSelectedFounder(founder)}
            className="w-full sm:w-auto bg-white hover:bg-slate-950 hover:text-white text-slate-900 px-6 py-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex items-center justify-between sm:justify-center gap-4 group cursor-pointer"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 group-hover:bg-cyan-900/50 text-cyan-600 group-hover:text-cyan-400 border border-cyan-100 group-hover:border-cyan-800 flex items-center justify-center transition-colors shrink-0">
                <User size={18} />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg tracking-tight group-hover:text-white transition-colors">
                  {founder.name}
                </h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                  {founder.role}
                </p>
              </div>
            </div>

            <ArrowRight size={16} className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </motion.div>
        ))}
      </div>

      {/* Founder Modal Popup (Shows image, bio, and details upon clicking name) */}
      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFounder(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col items-center text-center">
                {/* Founder Image */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 border-cyan-400 p-1 bg-gradient-to-tr from-cyan-400 to-teal-300 shadow-lg mb-5">
                  <img
                    src={selectedFounder.image}
                    alt={selectedFounder.name}
                    className="w-full h-full object-cover rounded-full"
                    width={128}
                    height={128}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  {selectedFounder.name}
                </h3>

                <span className="inline-block px-3.5 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full mt-2 mb-4 border border-cyan-100">
                  {selectedFounder.role}
                </span>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedFounder.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={selectedFounder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={selectedFounder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={selectedFounder.email}
                    aria-label="Email"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Team;
