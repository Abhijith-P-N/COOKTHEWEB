import React from 'react'
import Main from './components/sections/main';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Ingredients from './components/sections/ingredients'
import Services from './components/sections/services';
import Projects from './components/sections/projects';
import Team from './components/sections/Team';
import Testimonials from './components/sections/testimonials';
import Connect from './components/sections/connect';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App
