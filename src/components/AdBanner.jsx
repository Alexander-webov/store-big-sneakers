import addSneakers from "../assets/images/addSneakers.png";

function AdBanner() {
  return (
    <div className="relative mt-48 mb-10 w-full h-[500px] bg-cyan-500 text-white pl-20 pt-32">
      <img className="absolute top-[-150px] right-0" src={addSneakers} alt="" />
      <div className="max-w-[596px]">
        <h2 className="text-6xl font-medium">Newbalance Running Sneakers</h2>
        <p className="text-2xl mt-8">
          Shoes that transform your body language and attitude.
        </p>
        <a
          className="inline-block mt-14 text-2xl font-medium border-b-4 border-inherit border-solid"
          href="#"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
}

export default AdBanner;
