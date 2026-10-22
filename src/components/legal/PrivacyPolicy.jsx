import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SEO from "../SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <SEO
        title="Privacy Policy | COOKTHEWEB"
        description="Read the Privacy Policy for COOKTHEWEB. Learn how we collect, use, and protect your personal data and project inquiries."
        canonical="https://cooktheweb.in/privacy"
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
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Last updated: October 2026
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
            <p>
              At <strong>COOKTHEWEB</strong> ("we", "our", or "us"), accessible from cooktheweb.in, protecting your privacy is of utmost importance. This Privacy Policy document outlines the types of information collected and recorded by COOKTHEWEB and how we use it.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">1. Information We Collect</h3>
            <p>
              When you submit an inquiry through our contact form or interact with our digital services, we may collect personal information such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Project details, requirements, and messages</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. How We Use Your Information</h3>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your project inquiries and communicate effectively</li>
              <li>Provide custom web development, app development, and design services</li>
              <li>Improve our website performance, user experience, and offerings</li>
              <li>Send administrative updates or follow-ups regarding your projects</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Data Security</h3>
            <p>
              We implement robust security measures, including HTTPS encryption and secure database/spreadsheet handling, to maintain the safety of your personal information when you submit inquiries or browse our platform.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Third-Party Services</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Trusted third-party tools (such as Google Sheets for inquiry logging and Google Analytics) adhere to strict confidentiality and privacy standards.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">5. Contact Us</h3>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:cooktheweb.in@gmail.com" className="text-cyan-600 font-semibold hover:underline">cooktheweb.in@gmail.com</a> or via WhatsApp at +91 79072 94980.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
