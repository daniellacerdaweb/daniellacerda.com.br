import { useRouter } from 'next/router';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { convertRichText } from '../../helper/contentful/richText';
import { useGetPortfolio } from '../../hook/usePortfolio';

const templatePortfolio = (data) => (
  <>
    <div className="flex flex-rows justify-center items-start md:flex-row-reverse">
      <div className="w-full  flex items-center">
        <div className="w-full">
          <h1 className="text-5xl font-semibold mb-5">{data.title}</h1>
          <div className="mb-5">{convertRichText(data?.contents?.json)}</div>
          <div className="mb-5">
            <a href={data.git} target="_blank" className="text-yellow-600">
              {data.git.replace('https://', '')}
            </a>
          </div>
          <div className="mb-5">
            <a href={data.site} target="_blank" className="text-yellow-600">
              {data.site.replace('https://', '')}
            </a>
          </div>
          <hr className="my-5" />
          <h1 className="text-2xl font-semibold mb-5">Stacks</h1>
          <div>
            {data.stacks.map((stack) => (
              <span key={stack} className="bg-gray-200 px-4 py-1 m-1 rounded-full">
                {stack}
              </span>
            ))}
          </div>
          <hr className="my-5" />
        </div>
      </div>
    </div>
    <div className="flex flex-rows  md:flex-row-reverse ">
      <LazyLoadImage
        src={data.image.url}
        alt="profile"
        className="w-full m-auto shadow-2xl"
        effect="opacity"
        delayMethod="throttle"
      />
    </div>
  </>
);

const Portfolio = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading } = useGetPortfolio(slug as string);
  if (loading) <>carregando</>;
  return <>{data && templatePortfolio(data?.portfolioCollection.items[0])}</>;
};

export default Portfolio;
