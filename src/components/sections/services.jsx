import { Globe, Cpu, Code, ArrowRight, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import '../../index.css'

const services = [
  {
    title: "Web Development",
    description: "Crafting high-performance, accessible, and scalable web applications that drive growth.",
    details: "Our web suite includes SEO optimization, performance tuning, and custom CMS integration using Next.js and Tailwind CSS.",
    icon: <Globe size={24} />,
    tag: "Best in Class",
  },
  {
    title: "Mobile Solutions",
    description: "Building cross-platform apps with native-like feel and performance for iOS and Android.",
    details: "We specialize in React Native development, ensuring your app runs smoothly with offline capabilities and native animations.",
    icon: <Cpu size={24} />,
    tag: "Smooth UX",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that provide exceptional user experiences and delight customers.",
    details: "From wireframes to high-fidelity prototypes, we focus on user behavior to create designs that are as functional as they are beautiful.",
    icon: <Code size={24} />,
    tag: "Modern Design",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="services">
      <div className="services-header">
        <h2>OUR RECIPE</h2>
        <p>What we serve to help your business grow</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={expandedIndex === index ? {} : { y: -12 }}
            className={`service-card ${expandedIndex === index ? "expanded" : ""}`}
          >
            <div className="glow" />

            <div className="icon-box">{service.icon}</div>

            <span className="service-tag">{service.tag}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            {/* Expansion Area */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="service-details-content"
                >
                  <div className="details-divider" />
                  <p className="extra-info">{service.details}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div 
              className="learn-more" 
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? "Show Less" : "Learn More"} 
              {expandedIndex === index ? <ChevronUp size={16} /> : <ArrowRight size={16} />}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;