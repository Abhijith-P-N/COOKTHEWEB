import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";
import "../../index.css";

const founders = [
    {
        name: "Abhijith P N",
        role: "Founder & Lead Developer",
        details: "Abhijith is a visionary developer with a passion for creating high-performance web experiences. He leads the technical direction of COOKTHEWEB.",
        image: "/Abhijith.png",
        linkedin: "https://www.linkedin.com/in/abhijith-pn-41a3b0327/",
        instagram: "https://www.instagram.com/a_bhi_j_i_th_/",
        email: "mailto:abhijithnaveen790@gmail.com"
    },
    {
        name: "Anfas Ul Arifeen N",
        role: "Founder & Creative Director",
        details: "Anfas is the creative soul behind our stunning designs. He ensures that every project we deliver is not only functional but also visually breathtaking and user-centric.",
        image: "/anfas.jpeg",
        linkedin: "https://www.linkedin.com/in/anfas-ul-arifeen-nasimudeen-062a77324/",
        instagram: "https://www.instagram.com/anfasularifeen/",
        email: "mailto:anfasularifeen.n@gmail.com"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

function Team() {
    return (
        <section id="team" className="team">
            <motion.div
                className="team-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2>The Minds Behind the Magic</h2>
                <p>Meet the visionary founders of COOKTHEWEB who are redefining the digital landscape.</p>
            </motion.div>

            <motion.div
                className="team-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {founders.map((founder, i) => (
                    <motion.div
                        key={i}
                        className="founder-card"
                        variants={itemVariants}
                    >
                        <div className="founder-image-wrapper">
                            <img src={founder.image} alt={founder.name} className="founder-image" />
                            <div className="founder-socials">
                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                                <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                                <a href={founder.email} className="social-icon"><Mail size={20} /></a>
                            </div>
                        </div>
                        <div className="founder-info">
                            <h3>{founder.name}</h3>
                            <span className="founder-role">{founder.role}</span>
                            <p className="founder-details">{founder.details}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Team;
