import { motion } from 'framer-motion';
import React from 'react';
import { useGetStacks } from '../hook/useStacks';

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

const list3 = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const templateAbout = (data) => {
  const stacks = data.map(({ title, stacks }) => (
    <div className="flex w-full flex-col mt-10 mx-5 md:w-3/12">
      <h1 className="text-2xl font-semibold mb-5 ">{title}</h1>
      <div className="flex flex-wrap sm:text-center ">
        {stacks.map((stack) => (
          <motion.div
            key={stack}
            className="flex rounded-full py-3 px-6 bg-yellow-200  m-1"
            variants={item}>
            {stack}
          </motion.div>
        ))}
      </div>
    </div>
  ));

  return (
    <motion.div
      className="flex  justify-center items-start md:flex-row-reverse"
      id="about"
      initial="hidden"
      animate="visible"
      variants={list3}>
      <div className="w-full flex-col md:w-6/6 flex items-center">
        {/* <div className="w-full">
          <h1 className="text-5xl font-semibold mb-5">Stacks</h1>
        </div> */}
        <div className="flex flex-wrap justify-between w-full">{stacks}</div>
      </div>
    </motion.div>
  );
};

const Stacks = () => {
  const { data, loading } = useGetStacks();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.stacksCollection.items)}</>;
};

export default Stacks;
