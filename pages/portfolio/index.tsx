import { motion } from 'framer-motion';
import React from 'react';
import CardPortfolio from '../../components/cardPortfolio';
import { useGetAllPortfolio } from '../../hook/usePortfolio';

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const Portfolio = () => {
  const { data } = useGetAllPortfolio();
  return (
    <>
      {/* <div className="w-full">
        <h1 className="text-5xl font-semibold mb-5">Portifólio</h1>
      </div> */}
      <motion.div
        className="w-full justify-center flex flex-wrap"
        variants={item}
        initial="hidden"
        animate="visible">
        {data?.portfolioCollection.items.map((portfolio) => (
          <CardPortfolio portfolio={portfolio} key={portfolio.path} />
        ))}
      </motion.div>
    </>
  );
};

export default Portfolio;
