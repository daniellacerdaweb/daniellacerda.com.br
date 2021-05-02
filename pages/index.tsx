import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

const Home = () => (
  <Layout>
    <section>
      <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse  " id="home">
        <div className="w-full flex items-end  ">
          <h1 className="absolute text-5xl">Desenvolvedor Front-End</h1>
          <LazyLoadImage
            src="/images/background.svg"
            alt="profile"
            className="flex m-0 "
            effect="blur"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
