import { motion } from 'framer-motion';
import React, { CSSProperties } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { convertRichText } from '../helper/contentful/richText';
import { useGetPage } from '../hook/usePage';

const css: CSSProperties = { backgroundImage: 'url(/images/background.svg)' };

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

const item2 = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: +100 }
};

const item3 = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const templateAbout = (data) => (
  <motion.div
    variants={item3}
    className="flex flex-col h-full bg-no-repeat bg-right-bottom bg-contain md:flex-row "
    style={css}
    initial="hidden"
    animate="visible">
    <motion.div className="w-full md:w-3/6 flex items-center m-10" variants={item}>
      <div className="w-full">
        {/* <h1 className="text-5xl text-gray-800 font-semibold mb-5">{data.title}</h1> */}
        <div className="w-5/6">{convertRichText(data.contents.json)}</div>
      </div>
    </motion.div>
    <motion.div className="w-full md:w-3/6 flex items-end justify-end" variants={item2}>
      <LazyLoadImage
        src={data.image.url}
        alt="profile"
        className="w-full h-full"
        effect="opacity"
        delayMethod="throttle"
      />
    </motion.div>
  </motion.div>
);

const Sobre = () => {
  const { data, loading } = useGetPage();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.pageCollection.items[0])}</>;
};

export default Sobre;
