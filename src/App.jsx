import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import SEO from "./components/SEO";

const Main = React.lazy(() => import("./components/sections/main"));
const Services = React.lazy(() => import("./components/sections/services"));
const WhyUs = React.lazy(() => import("./components/sections/WhyUs"));
const Process = React.lazy(() => import("./components/sections/Process"));
const Projects = React.lazy(() => import("./components/sections/projects"));
const Ingredients = React.lazy(() => import("./components/sections/ingredients"));
const Team = React.lazy(() => import("./components/sections/Team"));
const Testimonials = React.lazy(() => import("./components/sections/testimonials"));
const FAQ = React.lazy(() => import("./components/sections/FAQ"));
const Connect = React.lazy(() => import("./components/sections/connect"));
const Shop = React.lazy(() => import("./components/Shop"));
const PrivacyPolicy = React.lazy(() => import("./components/legal/PrivacyPolicy"));
const CookiePolicy = React.lazy(() => import("./components/legal/CookiePolicy"));
const TermsOfService = React.lazy(() => import("./components/legal/TermsOfService"));

const Home = () => (
  <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-cyan-500 selection:text-white">
    <SEO
      title="Best Web & App Development Company in Palakkad, Kerala, Karnataka & India | COOKTHEWEB"
      description="Top-rated web development, app development, and custom software company in Palakkad, Kerala, Karnataka, and India. Fast, secure, and SEO-optimized digital solutions."
      canonical="https://cooktheweb.in/"
    />
    <Navbar />
    <main>
      <Main />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <Ingredients />
      <Team />
      <Testimonials />
      <FAQ />
      <Connect />
    </main>
    <Footer />
    <Whatsapp />
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
            <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
