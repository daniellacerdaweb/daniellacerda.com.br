import React from 'react';
import { useGetPage } from '../hook/useGetPage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const templateAbout = (data) => {
  return (
    <section>
      <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse" id="about">
        <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
          <LazyLoadImage
            src={data.image.url}
            alt="profile"
            className="flex m-0"
            effect="opacity"
            delayMethod="throttle"
          />
        </div>
        <div className="w-full md:w-3/6 flex items-center">
          <div className="w-full md:w-4/5 m-auto">
            <div className="mx-3 mt-5 ">
              <h1 className="text-5xl font-semibold mb-5">{data.title}</h1>
              {documentToReactComponents(data.contents.json)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sobre = () => {
  const { data, loading, error } = useGetPage();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.pageCollection.items[0])}</>;
};

export default Sobre;
