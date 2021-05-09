import React from 'react';
import CardPortfolio from '../../components/cardPortfolio';
import { useGetAllPortfolio } from '../../hook/usePortfolio';

const Portfolio = () => {
  const { data } = useGetAllPortfolio();
  return (
    <>
      <div className="w-full">
        <h1 className="text-5xl font-semibold mb-5">Portifólio</h1>
      </div>
      <div className="w-full justify-center flex flex-wrap">
        {data?.portfolioCollection.items.map((portfolio) => (
          <CardPortfolio portfolio={portfolio} key={portfolio.path} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
