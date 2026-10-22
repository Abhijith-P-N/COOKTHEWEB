import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Zap } from "lucide-react";

const technologies = [
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "React", url: "https://react.dev" },
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "Node.js", url: "https://nodejs.org" },
  { name: "PostgreSQL", url: "https://www.postgresql.org" },
  { name: "Supabase", url: "https://supabase.com" },
  { name: "Stripe", url: "https://stripe.com" },
  { name: "Prisma", url: "https://www.prisma.io" },
  { name: "Three.js", url: "https://threejs.org" },
  { name: "Express", url: "https://expressjs.com" },
  { name: "MongoDB", url: "https://www.mongodb.com" },
  { name: "Redis", url: "https://redis.io" },
  { name: "Docker", url: "https://www.docker.com" },
];

const Ingredients = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="relative py-4">
        {/* Soft Left & Right gradient masks for marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <Marquee speed={40} pauseOnHover gradient={false}>
          {technologies.map((tech, i) => (
            <a
              key={i}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3.5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 hover:shadow-xs transition-all duration-200 text-sm font-medium"
            >
              <Zap size={15} className="text-cyan-500 fill-cyan-400/20" />
              <span>{tech.name}</span>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Ingredients;