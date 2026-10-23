import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import WhatsappIcon from "./icons/WhatsappIcon";

function Footer() {
  return (
    <footer className="bg-[#070b12] text-slate-400 pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-800/70">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-lg sm:text-xl font-bold tracking-tight text-white"
            >
              <span>COOK</span>
              <span className="text-cyan-400 font-extrabold">THE</span>
              <span className="text-white">WEB.in</span>
            </Link>

            <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We build modern, secure and scalable digital experiences for
              businesses and individuals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5 sm:mt-6">
              <a
                href="https://github.com/Abhijith-P-N"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijith-pn-41a3b0327/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/cooktheweb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/917907294980"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
              >
                <WhatsappIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide uppercase sm:normal-case">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-cyan-400 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide uppercase sm:normal-case">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide uppercase sm:normal-case">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Mobile Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Custom Software
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Cloud & Deployment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide uppercase sm:normal-case">
              Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-cyan-400 shrink-0" />
                <a
                  href="mailto:cooktheweb.in@gmail.com"
                  className="hover:text-cyan-400 transition-colors truncate"
                >
                  cooktheweb.in@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-cyan-400 shrink-0" />
                <a
                  href="tel:+917907294980"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 79072 94980
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-cyan-400 shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-[11px] sm:text-xs text-slate-500">
          <p>© 2026 COOKTHEWEB.in. All rights reserved.</p>
          <p>Built with passion for the web.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
