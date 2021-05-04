import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Stacks = () => (
  <>
    <section>
      <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse" id="stacks">
        <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
          <LazyLoadImage src="/images/about.png" alt="profile" className="flex m-0" effect="blur" />
        </div>
        <div className="w-full md:w-3/6 flex items-center flex-col">
          <div className="w-full md:w-4/5 m-auto">
            <div className="mx-3 mt-5 ">
              <h1 className="text-5xl font-semibold mb-5">Front</h1>
              <div className="rounded-full py-3 px-6 bg-yellow-200 w-max">ReactJs</div>
              <div className="rounded-full py-3 px-6 bg-yellow-200 w-max">Material-UI</div>
              <div className="rounded-full py-3 px-6 bg-yellow-200 w-max">TailWind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Stacks;
