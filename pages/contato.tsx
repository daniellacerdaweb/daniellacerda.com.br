import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useGetPage } from '../hook/useGetPage';

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
  <section>
    <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse" id="about">
      <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
        {data.image?.url && (
          <LazyLoadImage
            src={data.image.url}
            alt="profile"
            className="flex m-0"
            effect="opacity"
            delayMethod="throttle"
          />
        )}
      </div>
      <div className="w-full md:w-3/6 flex items-center">
        <div className="w-full md:w-4/5 m-auto">
          <div className="mx-3 mt-5 ">
            <h1 className="text-5xl font-semibold mb-5">{data.title}</h1>
            {documentToReactComponents(data.contents.json, options)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contato = () => {
  const { data, loading } = useGetPage();
  if (loading) <>carregando</>;
  return <>{data && templateAbout(data?.pageCollection.items[0])}</>;
};

export default Contato;
