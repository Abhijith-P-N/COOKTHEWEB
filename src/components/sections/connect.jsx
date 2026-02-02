import { motion } from "framer-motion";
import {
  Rocket,
  Mail,
  ArrowRight,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import '../../index.css'

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function Connect() {
  return (
    <section id="connect" className="connect">
      <div className="connect-glow" />

      <div className="connect-content">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="connect-text"
        >
          <div className="connect-icon">
            <Rocket size={40} />
          </div>

          <h2>
            Let&apos;s build the <br /> next big thing together.
          </h2>

          <p>
            Whether you&apos;re an Indian startup or a global enterprise, I provide
            premium digital solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="connect-actions"
        >
          <a href="mailto:info.cooktheweb@gmail.com" className="email-btn">
            <Mail size={22} />
            Email Me Directly
            <ArrowRight size={18} />
          </a>

          <div className="socials">
            <a href="#" className="social twitter" aria-label="Twitter">
              <Instagram size={22} />
            </a>
            <a href="#" className="social github" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="#" className="social linkedin" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Connect;
