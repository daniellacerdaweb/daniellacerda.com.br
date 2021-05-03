import React from 'react';
import Layout from '../components/layout';
import { useGetPage } from '../hook/useGetPage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const templateContact = (data) => (
  <section>
    <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse " id="about">
      <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
        <LazyLoadImage src="/images/about.png" alt="profile" className="flex m-0" effect="blur" />
      </div>
      <div className="w-full md:w-3/6 flex items-center">
        <div className="w-full md:w-4/5 m-auto">
          <div className="mx-3 mt-5 ">
            <h1 className="text-5xl font-semibold mb-5">{data.page.title}</h1>
            {documentToReactComponents(data?.page.contents.json)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const { data } = useGetPage('4z5mG1U8YlzI9MC7xees7O');
  return <Layout>{data && templateContact(data)}</Layout>;
};

export default Contact;
