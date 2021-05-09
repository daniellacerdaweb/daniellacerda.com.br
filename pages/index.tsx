import { motion } from 'framer-motion';
import React, { CSSProperties } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const css: CSSProperties = { backgroundImage: 'url(/images/background.svg)' };

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

const Home = () => {
  return (
    <motion.div
      className="flex h-full bg-no-repeat	bg-left-bottom	bg-contain"
      style={css}
      initial="hidden"
      animate="visible">
      <div className="w-full md:w-3/6 flex items-center">
        <div className="w-full ml-5">
          <motion.h1 className="text-8xl text-gray-800 font-semibold mb-5 " variants={item}>
            Desenvolvedor
          </motion.h1>
          <motion.h1 className="text-6xl text-gray-800 font-semibold mb-5" variants={item}>
            Front-End
          </motion.h1>
        </div>
      </div>
      <div className="w-full md:w-3/6 flex items-end justify-end"></div>
    </motion.div>
  );
};

export default Home;
