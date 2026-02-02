import React, { useEffect, useState } from "react";
import "../index.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="chef"></span>
        <strong>COOK<span className="brand-accent">THE</span>WEB.in<spam className="branddd"></spam></strong>
        
      </div>
      

      <ul className="nav-links">
        <li><a href="#ingredients">INGREDIENTS</a></li>
        <li><a href="#creations">CREATIONS</a></li>
        <li><a href="#services">RECIPE</a></li>
        <li><a href="#reviews">REVIEWS</a></li>
      </ul>

      <a href="#connect" className="order-btn">ORDER NOW</a>
    </nav>
  );
}

export default Navbar;
