import React from "react";
import { motion } from "framer-motion";
import { shopProjects } from "../utils/shopData";
import { ExternalLink, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";
import SEO from "./SEO";

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <SEO
        title="Ready-to-Deploy Web Templates & Digital Solutions | COOKTHEWEB Shop"
        description="Explore handcrafted, high-performance web templates, landing pages, and ecommerce solutions ready to launch instantly for your business."
        canonical="https://cooktheweb.in/shop"
      />
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 flex-1 w-full">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 mb-4 shadow-xs">
            <ShoppingBag size={14} className="text-cyan-600" />
            <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase">
              PROJECT SHOP
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Ready-to-Deploy <span className="text-cyan-500">Solutions</span>
          </h1>

          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Explore our handcrafted, high-performance web products and templates
            ready to launch for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-4 pb-6 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 mb-5 relative">
                <img
                  src={project.image}
                  alt={`${project.title} - COOKTHEWEB Shop`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={400}
                />
              </div>

              <div className="flex flex-col flex-1 px-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mt-2 mb-6 flex-1">
                  {project.description}
                </p>

                <a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-950 hover:bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-all duration-200 hover:scale-[1.01] active:scale-95"
                >
                  <span>View Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <Whatsapp />
    </div>
  );
};

export default Shop;
