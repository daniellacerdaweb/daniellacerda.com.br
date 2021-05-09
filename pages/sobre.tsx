import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { convertRichText } from '../helper/contentful/richText';
import { useGetPage } from '../hook/usePage';

const templateAbout = (data) => (
  <div className="flex flex-col justify-center items-start md:flex-row-reverse" id="about">
    <div className="w-full md:w-3/6 flex items-end justify-end">
      <LazyLoadImage
        src={data.image.url}
        alt="profile"
        className="w-full h-full"
        effect="opacity"
        delayMethod="throttle"
      />
    </div>
    <div className="w-full md:w-3/6 flex items-center">
      <div className="w-full">
        <h1 className="text-5xl font-semibold mb-5">{data.title}</h1>
        {convertRichText(data.contents.json)}
      </div>
    </div>
  </div>
);

const Sobre = () => {
  const { data, loading } = useGetPage();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.pageCollection.items[0])}</>;
};

export default Sobre;
