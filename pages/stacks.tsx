import React from 'react';
import { useGetStacks } from '../hook/useStacks';

const templateAbout = (data) => {
  const stacks = data.map(({ title, stacks }) => (
    <div className="w-4/12">
      <h1 className="text-2xl font-semibold mb-5 sm: center sm: text-center">{title}</h1>
      <div className="flex flex-wrap sm:text-centernp justify-center">
        {stacks.map((stack) => (
          <div key={stack} className="w-36 rounded-full py-3 px-6 bg-yellow-200  m-1">
            {stack}
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="flex  justify-center items-start md:flex-row-reverse" id="about">
      <div className="w-full flex-col md:w-6/6 flex items-center">
        <div className="w-full">
          <h1 className="text-5xl font-semibold mb-5">Stacks</h1>
        </div>
        <div className="flex flex-wrap justify-between w-full mt-10">{stacks}</div>
      </div>
    </div>
  );
};

const Stacks = () => {
  const { data, loading } = useGetStacks();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.stacksCollection.items)}</>;
};

export default Stacks;
