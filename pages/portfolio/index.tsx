import { motion } from 'framer-motion';

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
