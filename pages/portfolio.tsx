import React from 'react';
import CardPortfolio from '../components/cardPortfolio';

const Portfolio = () => (
  <>
    <div className="w-full">
      <h1 className="text-5xl font-semibold mb-5">Portifólio</h1>
    </div>
    <div className="w-full justify-center flex flex-wrap">
      <CardPortfolio />
      <CardPortfolio />
      <CardPortfolio />
      <CardPortfolio />
    </div>

    {/* <div
      className="flex flex-col justify-center items-start md:flex-row-reverse bg-yellow-200"
      id="about">
      <div className="w-full flex items-center bg-yellow-900">
        <div className="w-4/5 m-auto">
        </div>
      </div>
    </div> */}
  </>
);

export default Portfolio;
