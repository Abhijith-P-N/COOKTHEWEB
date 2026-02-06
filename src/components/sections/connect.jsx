import { motion } from "framer-motion";
import {
  Rocket,
  Mail,
  ArrowRight,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import "../../index.css";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function Connect() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        alert("Message sent successfully");
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

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
          className="connect-form-container"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="main-contact-form"
          >
            {/* Required hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="details">Project Details</label>
              <textarea
                id="details"
                name="details"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Mail size={20} />
              Send Message
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="socials-container">
            <p>Or find me on social media</p>
            <div className="socials">
              <a
                href="https://www.instagram.com/cooktheweb"
                className="social twitter"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="social github"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/cooktheweb-undefined-7823163aa/"
                className="social linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Connect;