import React from 'react';
import { motion } from 'framer-motion';
import { shopProjects } from '../utils/shopData';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import Navbar from './Navbar';
import Whatsapp from './Whatsapp';

const Shop = () => {
    return (
        <div className="shop-page">
            <Navbar />

            <main className="shop-container">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="shop-header"
                >
                    <ShoppingBag className="shop-icon" />
                    <h1>PROJECT <span className="brand-accent">SHOP</span></h1>
                    <p>Explore our premium web solutions ready for your business</p>
                </motion.header>

                <div className="projects-grid-shop">
                    {shopProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="shop-card"
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a
                                    href={project.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="open-project-btn"
                                >
                                    View Live <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Whatsapp />
        </div>
    );
};

export default Shop;
