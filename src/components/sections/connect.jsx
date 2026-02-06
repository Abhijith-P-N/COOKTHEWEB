import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Mail,
  ArrowRight,
  Instagram,
  Github,
  Linkedin,
  CheckCircle,
  XCircle,
  Loader2,
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

// Netlify-required encoder
const encode = (data) =>
  Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");

function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(
        () => setToast((t) => ({ ...t, show: false })),
        4000
      );
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() => {
        setToast({
          show: true,
          message: "Message sent! I’ll get back to you soon 🚀",
          type: "success",
        });
        form.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        setToast({
          show: true,
          message: "Something went wrong. Please try again ❌",
          type: "error",
        });
        setIsSubmitting(false);
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
            {/* Netlify required hidden fields */}
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
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Mail size={20} />
                  Send Message
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Toast */}
          <AnimatePresence>
            {toast.show && (
              <motion.div
                initial={{ opacity: 0, y: 30, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 20, x: "-50%" }}
                className={`toast-notification ${toast.type}`}
              >
                {toast.type === "success" ? (
                  <CheckCircle size={20} />
                ) : (
                  <XCircle size={20} />
                )}
                <span>{toast.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="socials-container">
            <p>Or find me on social media</p>
            <div className="socials">
              <a
                href="https://www.instagram.com/cooktheweb"
                className="social twitter"
              >
                <Instagram size={22} />
              </a>
              <a href="#" className="social github">
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/cooktheweb-undefined-7823163aa/"
                className="social linkedin"
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