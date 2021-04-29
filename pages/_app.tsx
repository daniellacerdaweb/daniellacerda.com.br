import React from 'react';
import Navigation from '../components/Navigation';

import '../styles/globals.css';
import About from '../components/About';
import Home from '../components/Home';
import Portfolio from '../components/Portifolio';
import Stacks from '../components/Stacks';
import Contact from '../components/Contact';

const Site = () => (
  <>
    <Navigation />
    <Home />
    <About />
    <Portfolio />
    <Stacks />
    <Contact />
  </>
);

export default Site;
