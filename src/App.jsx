import React from 'react'
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
const Main = React.lazy(() => import('./components/sections/main'));
const Ingredients = React.lazy(() => import('./components/sections/ingredients'));
const Services = React.lazy(() => import('./components/sections/services'));
const Projects = React.lazy(() => import('./components/sections/projects'));
const Team = React.lazy(() => import('./components/sections/Team'));
const Testimonials = React.lazy(() => import('./components/sections/testimonials'));
const Connect = React.lazy(() => import('./components/sections/connect'));
const Shop = React.lazy(() => import('./components/Shop'));


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

const Home = () => (
  <>
    <Navbar />
    <Main />
    <Ingredients />
    <Services />
    <Projects />
    <Team />
    <Testimonials />
    <Connect />
    <Whatsapp />
  </>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loading-spinner">Cooking...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
