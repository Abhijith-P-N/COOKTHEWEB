import React from 'react'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Zap } from "lucide-react";
import '../../index.css';

// 1. Updated data structure with official URLs
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Ingredients = () => {
  return (
    <motion.section
      id="ingredients"
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="ingredients"
    >
      <div className="ingredients-header">
        <h2>OUR INGREDIENTS</h2>
        <p>The technologies we cook with every day</p>
      </div>

      <div className="ingredients-marquee">
        <div className="fade-left" />
        <div className="fade-right" />

        <Marquee speed={50} pauseOnHover gradient={false}>
          {technologies.map((tech, i) => (
            /* 2. Wrapped content in an anchor tag */
            <a 
              key={i} 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="tech-item"
            >
              <Zap size={20} className="zap-icon" />
              {tech.name}
            </a>
          ))}
        </Marquee>
      </div>
    </motion.section>
  )
}

export default Ingredients