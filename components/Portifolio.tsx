import React from 'react';
import CardPortfolio from './CardPortfolio';

const Portfolio = () => (
  <section>
    <div className="w-full flex items-start min-h-screen bg-gray-100 p-5 sm:flex flex-col" id="portfolio">
      <h1 className="text-5xl font-semibold mb-5">Portfólio</h1>
      <CardPortfolio />
      <CardPortfolio />
      <CardPortfolio />
      <CardPortfolio />
    </div>
  </section>
);

export default Portfolio;
