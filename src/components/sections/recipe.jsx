import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Sparkles, Code, Rocket, ChevronDown } from "lucide-react";


const steps = [
  {
    title: "Discovery & Strategy",
    description: "We align business goals, users, and technical direction.",
    details:
      "Through stakeholder discussions, research, and audits, we define clear objectives, success metrics, and a scalable technical roadmap.",
    icon: <Target size={26} />,
    color: "blue",
  },
  {
    title: "Design & Experience",
    description: "Crafting intuitive, conversion-focused user experiences.",
    details:
      "We design wireframes and interactive prototypes to validate flows, usability, and visual direction before development begins.",
    icon: <Sparkles size={26} />,
    color: "purple",
  },
  {
    title: "Development & Engineering",
    description: "Building fast, secure, and scalable systems.",
    details:
      "Using modern stacks like React, Next.js, and Node, we engineer high-performance applications with rigorous testing and best practices.",
    icon: <Code size={26} />,
    color: "orange",
  },
  {
    title: "Launch & Growth",
    description: "Deploy, monitor, and continuously improve.",
    details:
      "Post-launch, we track performance, gather insights, and iterate to ensure long-term growth and product success.",
    icon: <Rocket size={26} />,
    color: "green",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function Recipe() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="recipe" className="recipe">
      <motion.div
        className="recipe-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Our Methodology</h2>
        <p>How we transform ideas into high-impact digital products.</p>
      </motion.div>

      <motion.div
        className="recipe-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`recipe-card ${step.color}`}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="recipe-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>

            <button
              className="learn-more-btn"
              onClick={() => toggleExpand(i)}
            >
              {expandedIndex === i ? "Show Less" : "Learn More"}
              <motion.span
                animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {expandedIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="recipe-details"
                >
                  <div className="details-inner">
                    {step.details}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Recipe;