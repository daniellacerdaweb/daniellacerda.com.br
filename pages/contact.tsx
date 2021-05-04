import React from 'react';
import { useGetPage } from '../hook/useGetPage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const templateContact = (data) => {
  const { page } = data;
  const url = page.image?.url || null;
  const contents = page.contents.json;
  const title = page.title;

  return (
    <section>
      <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse " id="about">
        <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
          {url && <LazyLoadImage src={url} alt="profile" className="flex m-0" effect="blur" />}
        </div>
        <div className="w-full md:w-3/6 flex items-center">
          <div className="w-full md:w-4/5 m-auto">
            <div className="mx-3 mt-5 ">
              <h1 className="text-5xl font-semibold mb-5">{title && title}</h1>
              {contents && documentToReactComponents(contents)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { data } = useGetPage('4z5mG1U8YlzI9MC7xees7O');
  return <>{data && templateContact(data)}</>;
};

export default Contact;
