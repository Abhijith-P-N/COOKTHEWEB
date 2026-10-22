import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isShop = location.pathname === "/shop";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-slate-200/60 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Text */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-slate-900 group"
          >
            <span>COOK</span>
            <span className="text-cyan-500 font-extrabold group-hover:text-cyan-600 transition-colors">
              THEWEB
            </span>
            <span className="text-slate-900">.in</span>
          </Link>

          {/* Floating Bento Pill Menu */}
          <nav className="hidden md:flex items-center bg-white/75 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200/80 shadow-xs gap-7 text-sm font-medium text-slate-600">
            <a
              href={isShop ? "/#home" : "#home"}
              className="hover:text-cyan-600 transition-colors"
            >
              Home
            </a>
            <a
              href={isShop ? "/#services" : "#services"}
              className="hover:text-cyan-600 transition-colors"
            >
              Services
            </a>
            <a
              href={isShop ? "/#work" : "#work"}
              className="hover:text-cyan-600 transition-colors"
            >
              Work
            </a>
            <a
              href={isShop ? "/#about" : "#about"}
              className="hover:text-cyan-600 transition-colors"
            >
              About
            </a>
            <a
              href={isShop ? "/#contact" : "#contact"}
              className="hover:text-cyan-600 transition-colors"
            >
              Contact
            </a>
            <Link
              to="/shop"
              className={`hover:text-cyan-600 transition-colors flex items-center gap-1 ${
                isShop ? "text-cyan-600 font-semibold" : ""
              }`}
            >
              <span>Shop</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            </Link>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <a
              href={isShop ? "/#contact" : "#contact"}
              className="hidden sm:inline-flex items-center gap-2 bg-slate-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200/70"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-white/98 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center text-lg font-bold tracking-tight text-slate-900"
            >
              <span>COOK</span>
              <span className="text-cyan-500 font-extrabold">THEWEB</span>
              <span className="text-slate-900">.in</span>
            </Link>

            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200/70"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-6 py-6 flex flex-col gap-3 overflow-y-auto flex-1">
            <a
              href={isShop ? "/#home" : "#home"}
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-slate-800 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight size={18} className="text-slate-400" />
            </a>
            <a
              href={isShop ? "/#services" : "#services"}
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-slate-800 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Services & Bento</span>
              <ArrowRight size={18} className="text-slate-400" />
            </a>
            <a
              href={isShop ? "/#work" : "#work"}
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-slate-800 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Selected Work</span>
              <ArrowRight size={18} className="text-slate-400" />
            </a>
            <a
              href={isShop ? "/#about" : "#about"}
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-slate-800 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Founders & Team</span>
              <ArrowRight size={18} className="text-slate-400" />
            </a>
            <a
              href={isShop ? "/#reviews" : "#reviews"}
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-slate-800 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Client Reviews</span>
              <ArrowRight size={18} className="text-slate-400" />
            </a>
            <a
              href={isShop ? "/#contact" : "#contact"}
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-slate-800 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Contact Us</span>
              <ArrowRight size={18} className="text-slate-400" />
            </a>
            <Link
              to="/shop"
              onClick={closeMobileMenu}
              className="text-lg font-semibold text-cyan-600 py-2 flex items-center justify-between"
            >
              <span>Project Shop</span>
              <span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-full font-bold">
                Live
              </span>
            </Link>
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50/70">
            <a
              href={isShop ? "/#contact" : "#contact"}
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white py-3.5 rounded-2xl text-base font-semibold shadow-md active:scale-98"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
