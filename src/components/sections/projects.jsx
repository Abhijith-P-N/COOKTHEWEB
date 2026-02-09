import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "../../index.css";

const projects = [
  {
    title: "E-Commerce Reimagined",
    category: "Full Stack Web",
    image: "/verdent.png",
    description: "A premium shopping experience with lightning-fast performance.",
  },
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    image: "https://cdn.dribbble.com/users/1598667/screenshots/15823758/finetech_dashboard_4x.png",
    description: "Complex data simplified into elegant, actionable insights.",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile & Web Development",
    image: "/hospital.png",
    description: "Native-feel cross-platform app for modern healthcare.",
  },
  {
    title: "Event Organiser",
    category: "Web Development",
    image: "/event.png",
    description: "A modern event booking and organising web app with four roles.",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function Projects() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const raf = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ⏺ Dot indicators logic
  const handleScroll = (e) => {
    const slider = e.target;
    const scrollLeft = slider.scrollLeft;
    const cards = slider.querySelectorAll('.project-card');

    if (cards.length > 1) {
      const cardWidth = cards[1].offsetLeft - cards[0].offsetLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < cards.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  // 🌀 Drag with momentum
  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
    velocity.current = 0;
    cancelAnimationFrame(raf.current);
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    const x = e.pageX;
    const walk = (x - startX.current) * 1.2;
    const prev = sliderRef.current.scrollLeft;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
    velocity.current = sliderRef.current.scrollLeft - prev;
  };

  const onMouseUp = () => {
    isDown.current = false;
    momentum();
  };

  const momentum = () => {
    if (Math.abs(velocity.current) < 0.5) return;
    sliderRef.current.scrollLeft += velocity.current;
    velocity.current *= 0.95;
    raf.current = requestAnimationFrame(momentum);
  };

  // 🔄 Auto scroll removed


  return (
    <section id="creations" className="projects">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="projects-header"
      >
        <h2>Recent Creations</h2>
        <p>A selection of premium projects cooked to perfection.</p>
      </motion.div>

      <div
        className="projects-grid"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onScroll={handleScroll}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="project-card"
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="overlay" />
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="project-card view-more-card"
        >
          <div className="view-more-inner">View More</div>
        </motion.div>
      </div>

      <div className="dot-indicators">
        {[...projects, { title: "view-more" }].map((_, i) => (
          <div
            key={i}
            className={`dot ${activeIndex === i ? 'active' : ''}`}
            onClick={() => {
              const slider = sliderRef.current;
              const cards = slider.querySelectorAll('.project-card');
              if (cards[i]) {
                const targetScroll = cards[i].offsetLeft - (slider.offsetWidth - cards[i].offsetWidth) / 2;
                slider.scrollTo({ left: targetScroll, behavior: 'smooth' });
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
