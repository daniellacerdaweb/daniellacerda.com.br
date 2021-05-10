import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { convertRichText } from '../../helper/contentful/richText';
import { useGetPortfolio } from '../../hook/usePortfolio';

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

const item2 = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: +100 }
};

const templatePortfolio = (data) => (
  <motion.div initial="hidden" animate="visible">
    <div className="flex flex-rows justify-center items-start md:flex-row-reverse">
      <div className="w-full  flex items-center">
        <div className="w-full">
          <motion.h1 className="text-5xl font-semibold mb-5" variants={item}>
            {data.title}
          </motion.h1>
          <motion.div className="mb-5" variants={item2}>
            {convertRichText(data?.contents?.json)}
          </motion.div>
          <motion.div className="mb-5" variants={item}>
            <a href={data.git} target="_blank" className="text-yellow-600">
              {data.git.replace('https://', '')}
            </a>
          </motion.div>
          <motion.div className="mb-5" variants={item}>
            <a href={data.site} target="_blank" className="text-yellow-600">
              {data.site.replace('https://', '')}
            </a>
          </motion.div>
          <hr className="my-5" />
          <motion.h1 className="text-2xl font-semibold mb-5" variants={item}>
            Stacks
          </motion.h1>
          <motion.div variants={item2}>
            {data.stacks.map((stack) => (
              <span key={stack} className="bg-gray-200 px-4 py-1 m-1 rounded-full">
                {stack}
              </span>
            ))}
          </motion.div>
          <hr className="my-5" />
        </div>
      </div>
    </div>
    <motion.div className="flex flex-rows  md:flex-row-reverse" variants={item2}>
      <LazyLoadImage
        src={data.image.url}
        alt="profile"
        className="w-full m-auto shadow-2xl"
        effect="opacity"
        delayMethod="throttle"
      />
    </motion.div>
  </motion.div>
);

const Portfolio = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading } = useGetPortfolio(slug as string);
  if (loading) <>carregando</>;
  return <>{data && templatePortfolio(data?.portfolioCollection.items[0])}</>;
};

export default Portfolio;
