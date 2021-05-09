import { PortfolioItem } from './model/portfolio';

type Props = {
  portfolio: PortfolioItem;
};

const CardPortfolio = ({ portfolio }: Props) => {
  const { image, title, stacks, path } = portfolio;

  return (
    <a href={`/portfolio/${path}`}>
      <div className="w-96 h-96 m-1 overflow-hidden bg-white shadow-xl rounded-3xl">
        <div className="overflow-hidden  w-full h-56  ">
          <img src={image.url} alt="" className="w-full " />
        </div>
        <p className="text-2xl ml-2 my-1">{title}</p>
        <hr className="mx-1" />
        <div className="flex w-full flex-wrap justify-start mt-1">
          {stacks.map((stack) => (
            <span key={stack} className="bg-gray-200 px-4 py-1 m-1 rounded-full">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default CardPortfolio;
