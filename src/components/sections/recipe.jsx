import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Sparkles, Flame, Package, ChevronDown } from "lucide-react";

const steps = [
  {
    title: "Gathering Ingredients",
    description: "We start by understanding your goals, audience, and technical requirements.",
    details: "This phase involves deep-dive workshops and auditing your current tech stack. We ensure every requirement is measured and prepped before the 'cooking' begins.",
    icon: <Utensils size={26} />,
    color: "blue",
  },
  {
    title: "Prepping the Base",
    description: "Design and prototyping. We wireframe the experience to ensure the journey is intuitive.",
    details: "We build high-fidelity interactive prototypes. You'll get to see exactly how the product flows and feels before we write a single line of production code.",
    icon: <Sparkles size={26} />,
    color: "purple",
  },
  {
    title: "High-Heat Cooking",
    description: "Development and testing. We build with precision, performance, and scalability in mind.",
    details: "Our developers use the latest tech stacks (React, Next.js, Node) to build a robust engine. We test for performance, security, and cross-device compatibility.",
    icon: <Flame size={26} />,
    color: "orange",
  },
  {
    title: "Serving the Dish",
    description: "Launch, monitor, and optimize. Your product is delivered hot and ready to impress.",
    details: "The launch is just the beginning. We monitor real-user feedback and performance metrics to optimize and scale your digital product for long-term success.",
    icon: <Package size={26} />,
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
        <h2>Our Secret Recipe</h2>
        <p>How we cook up success for your digital vision.</p>
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