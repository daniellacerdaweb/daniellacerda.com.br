import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useGetPage } from '../hook/usePage';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mt-5">{children}</p>,
    [INLINES.HYPERLINK]: ({ data }: any, children) => (
      <a href={`${data.uri}`} className="bg-yellow-200 rounded-full py-3 px-6">
        {children}
      </a>
    ),
    [MARKS.BOLD]: (text) => <b className="font-semibold">{text}</b>
  }
};

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
        {documentToReactComponents(data.contents.json, options)}
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
