import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../index.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="chef-logo-link" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="chef"></span>
          <strong>COOK<span className="brand-accent">THE</span>WEB.in<spam className="branddd"></spam></strong>
        </Link>


        <ul className="nav-links">
          <li><a href="/#ingredients">INGREDIENTS</a></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><a href="/#creations">CREATIONS</a></li>
          <li><a href="/#team">TEAM</a></li>
          <li><a href="/#reviews">REVIEWS</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#connect" className="order-btn">ORDER NOW</a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="close-menu-btn" onClick={toggleMobileMenu} aria-label="Close Menu">
          <X size={32} />
        </button>
        <ul className="mobile-nav-links">
          <li><a href="/#ingredients" onClick={toggleMobileMenu}>INGREDIENTS</a></li>
          <li><Link to="/shop" onClick={toggleMobileMenu}>SHOP</Link></li>
          <li><a href="/#creations" onClick={toggleMobileMenu}>CREATIONS</a></li>
          <li><a href="/#team" onClick={toggleMobileMenu}>TEAM</a></li>
          <li><a href="/#reviews" onClick={toggleMobileMenu}>REVIEWS</a></li>
          <li><a href="#connect" className="mobile-order-btn" onClick={toggleMobileMenu}>ORDER NOW</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
