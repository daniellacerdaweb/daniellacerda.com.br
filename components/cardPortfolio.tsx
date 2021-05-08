const CardPortfolio = () => (
  <div className="w-96 h-96 m-1 overflow-hidden bg-white shadow-xl rounded-3xl">
    <div className="overflow-hidden  w-full h-56  ">
      <img src="https://picsum.photos/400/300" alt="" className="w-full " />
    </div>
    <hr />
    <p className="text-lg ml-2 my-1">Teste</p>
    <hr className="mx-1" />
    <div className="flex w-full flex-wrap justify-between">
      <span className="bg-gray-200 px-4 py-1 m-1 rounded-full">React</span>
    </div>
  </div>
);

export default CardPortfolio;
