import React from 'react';

const Home = () => {
  return (
    <section>
      <div
        className="flex flex-col justify-center items-start mx-10 md:flex-row-reverse"
        id="about">
        <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
          {/* <LazyLoadImage
          src={data.image.url}
          alt="profile"
          className="flex m-0"
          effect="opacity"
          delayMethod="throttle"
        /> */}
        </div>
        <div className="w-full md:w-3/6 flex items-center">
          <div className="w-full md:w-4/5 m-auto">
            <div className="mx-3 mt-5 ">
              <h1 className="text-5xl font-semibold mb-5">Home</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
