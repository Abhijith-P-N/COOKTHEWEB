import React from 'react'
import Main from './components/sections/main';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Ingredients from './components/sections/ingredients'
import Services from './components/sections/services';
import Projects from './components/sections/projects';
import Recipe from './components/sections/recipe';
import Testimonials from './components/sections/testimonials';
import Connect from './components/sections/connect';


const App = () => {

  return (
    <div>
      <Navbar />
      <Main />   
      <Ingredients />
      <Services />
      <Projects />
      <Recipe />
      <Testimonials />
      <Connect />
      <Whatsapp />   
    </div>
  )
}

export default App
