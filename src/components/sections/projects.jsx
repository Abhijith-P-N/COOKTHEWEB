import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projectItems = [
  {
    title: "E-commerce Platform",
    image: "/project_ecommerce.jpg",
    link: "/shop",
  },
  {
    title: "Web Application",
    image: "/project_webapp.jpg",
    link: "/shop",
  },
  {
    title: "Business Website",
    image: "/project_business.jpg",
    link: "/shop",
  },
];

function Projects() {
  return (
    <section id="work" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header with Title on Left and Button on Right */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-3 sm:mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-cyan-600 uppercase">
              OUR WORK
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Selected Projects
          </h2>

          <p className="text-slate-500 mt-2 text-xs sm:text-base">
            A glimpse of the digital solutions we have built.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-950 hover:text-white hover:border-slate-950 text-slate-800 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs self-start sm:self-end group"
        >
          <span>View All Work</span>
          <ArrowRight
            size={15}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>

      {/* 3 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
        {projectItems.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-white rounded-2xl sm:rounded-3xl p-3 pb-4 sm:p-3.5 sm:pb-5 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col"
          >
            {/* Image Container */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] bg-slate-100 mb-3.5 sm:mb-4 relative">
              <img
                src={project.image}
                alt={`${project.title} - Digital Solution by COOKTHEWEB`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="flex items-center justify-between px-2 pt-1 mt-auto">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base md:text-lg group-hover:text-cyan-600 transition-colors">
                {project.title}
              </h3>

              <Link
                to={project.link}
                aria-label={`View ${project.title}`}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-200 shadow-xs"
              >
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
