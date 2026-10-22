import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SEO from "../SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <SEO
        title="Terms of Service | COOKTHEWEB"
        description="Review the Terms of Service for COOKTHEWEB. Guidelines, agreements, and terms governing our web development and digital services."
        canonical="https://cooktheweb.in/terms"
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
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Terms of Service
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Last updated: October 2026
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
            <p>
              Welcome to <strong>COOKTHEWEB</strong>. By accessing our website at cooktheweb.in or engaging our web development, app development, and design services, you agree to be bound by these Terms of Service.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">1. Services</h3>
            <p>
              COOKTHEWEB provides custom web design, web application development, mobile solutions, UI/UX design, and digital consulting services. Scope of work, deliverables, timelines, and pricing are defined in individual project agreements or proposals.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise agreed in writing, upon full payment for services rendered, clients receive ownership of the final delivered source code, designs, and digital assets. COOKTHEWEB retains the right to showcase completed projects in our portfolio and promotional materials.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Client Responsibilities</h3>
            <p>
              Clients agree to provide timely feedback, necessary content, credentials, and approvals required for the successful execution of projects. Delays in client provisions may adjust projected delivery timelines.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Limitation of Liability</h3>
            <p>
              COOKTHEWEB shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">5. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our website and services following any changes constitutes your acceptance of the revised terms.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">6. Contact Information</h3>
            <p>
              For inquiries regarding these Terms of Service, please reach out to us at <a href="mailto:cooktheweb.in@gmail.com" className="text-cyan-600 font-semibold hover:underline">cooktheweb.in@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
