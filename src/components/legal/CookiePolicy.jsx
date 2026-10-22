import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SEO from "../SEO";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <SEO
        title="Cookie Policy | COOKTHEWEB"
        description="Learn how COOKTHEWEB uses cookies and similar tracking technologies to enhance your browsing experience and performance."
        canonical="https://cooktheweb.in/cookies"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-36 pb-24 flex-1 w-full">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
              <Cookie size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Cookie Policy
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Last updated: October 2026
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
            <p>
              This Cookie Policy explains how <strong>COOKTHEWEB</strong> ("we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website at cooktheweb.in.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">1. What Are Cookies?</h3>
            <p>
              Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. How We Use Cookies</h3>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly, enabling core functionality such as security, network management, and accessibility.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., popular pages, bounce rates).</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings to enhance your browsing experience.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Managing Cookies</h3>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to certain functionality and areas of our website may be restricted.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Updates to This Policy</h3>
            <p>
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">5. Contact Us</h3>
            <p>
              If you have any questions about our use of cookies, please contact us at <a href="mailto:cooktheweb.in@gmail.com" className="text-cyan-600 font-semibold hover:underline">cooktheweb.in@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
