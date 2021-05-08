import React from 'react';
import CardPortfolio from '../components/cardPortfolio';

const Portfolio = () => (
  <>
    <section>
      <h1 className="flex w-full text-5xl font-semibold mb-5 ">Portfólio</h1>
      <div className="flex" id="portfolio">
        <div className="flex w-full flex-wrap justify-between ">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
    </section>
  </>
);

export default Portfolio;
