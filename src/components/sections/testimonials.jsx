import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import '../../index.css'

const testimonials = [
  {
    name: "Shazin Sameer",
    role: "Co-Founder,Oral Fresh ",
    content:
      "The quality of work is exceptional. My business website is now faster and more engaging than ever. Truly the best website developer I've worked with!",
    image: "https://i.pravatar.cc/150?u=aarav",
  },
  {
    name: "Priyanka Patel",
    role: "CEO, CraftyIndia",
    content:
      "Excellent eye for design and performance. The mobile app developed for our store is smooth and our users love it. Highly recommended for any Indian startup!",
    image: "https://i.pravatar.cc/150?u=priyanka",
  },
  {
    name: "Arjun Malhotra",
    role: "Digital Lead, DelhiDigital",
    content:
      "Amazing attention to detail. The animations and feel-good factor they added to our platform significantly increased our user retention.",
    image: "https://i.pravatar.cc/150?u=arjun",
  },
  {
    name: "Diya Iyer",
    role: "Marketing Head, BangaloreBits",
    content:
      "Quick turnaround and high-quality code. They understood our brand vision perfectly and delivered a top-notch web experience.",
    image: "https://i.pravatar.cc/150?u=diya",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <motion.div
        className="testimonials-header"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Trusted by Industry Leaders</h2>
        <p>See what my Indian clients have to say about our partnership.</p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="testimonial-header">
              <img src={t.image} alt={t.name} className="avatar" />

              <div className="author">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="star"
                  />
                ))}
              </div>
            </div>

            <p className="testimonial-text">“{t.content}”</p>

            <div className="verified">
              <CheckCircle2 size={14} />
              Verified Project
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
