import React from 'react';
import { useGetStacks } from '../hook/useGetStacks';

const templateAbout = (data) => (
  <>
    <section>
      <div
        className="max-h-screen flex flex-col justify-center items-start  md:flex-row-reverse"
        id="stacks">
        {data.map(({ title, stacks }) => (
          <div className="w-full md:w-3/6 flex items-center flex-col mt-32">
            <div className="w-full md:w-4/5 m-auto">
              <div className="mx-3 mt-5 ">
                <h1 className="text-2xl font-semibold mb-5">{title}</h1>
                <div className="flex flex-wrap ">
                  {stacks.map((stack) => (
                    <div key={stack} className=" rounded-full py-3 px-6 bg-yellow-200 w-max m-1">
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
