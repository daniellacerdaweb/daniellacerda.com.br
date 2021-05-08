import React from 'react';
import { useGetStacks } from '../hook/useStacks';

const templateAbout = (data) => (
  <>
    <section>
      <div
        className="flex flex-col justify-center items-start mx-10 md:flex-row-reverse"
        id="stacks">
        {data.map(({ title, stacks }) => (
          <div className="w-full md:w-3/6 flex  flex-col mt-5">
            <div className="w-full md:w-4/5 m-auto">
              <div className="mx-3 mt-5 ">
                <h1 className="text-2xl font-semibold mb-5 sm: center sm: text-center">{title}</h1>
                <div className="flex flex-wrap sm:text-centernp justify-center">
                  {stacks.map((stack) => (
                    <div key={stack} className="w-36 rounded-full py-3 px-6 bg-yellow-200  m-1">
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

const Stacks = () => {
  const { data, loading } = useGetStacks();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.stacksCollection.items)}</>;
};

export default Stacks;
