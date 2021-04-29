const CardPortfolio = () => (
  <>

    <div className="bg-white w-80 m-2 shadow-lg cursor-pointer rounded ">
      <div>
        <img src="https://picsum.photos/400/300" alt="" className="rounded-t" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl uppercase">Item a</h2>
        <p className="font-light text-gray-500 text-lg my-2">29,99 &euro;</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
        {/* <a href="#sss" className="block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out">Add to cart</a> */}
      </div>
    </div>

  </>
);

export default CardPortfolio;
