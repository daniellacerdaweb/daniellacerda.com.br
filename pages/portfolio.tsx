import React from 'react';
import CardPortfolio from '../components/cardPortfolio';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

const Portfolio = () => (
  <Layout>
    <section>
      <div
        className="w-full flex items-start min-h-screen bg-gray-100 p-5 sm:flex flex-col"
        id="portfolio">
        <h1 className="text-5xl font-semibold mb-5">Portfólio</h1>
        <div className="flex flex-row flex-wrap justify-between " id="portfolio">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
