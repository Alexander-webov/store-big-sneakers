import addSneakers from "../assets/images/addSneakers.png";

function AdBanner() {
  return (
    <div className="relative mt-5 mb-10 w-full md:h-[450px] h-[700px] bg-cyan-500 text-white sm:p-5 lg:pl-20 lg:pt-20">
      <img
        className="md:max-w-[500px] sm:max-w-[300px] max-w-[380px] absolute right-0 bottom-0 md:left-auto  left-0 md:bottom-auto"
        src={addSneakers}
        alt=""
      />
      <div className=" xl:w-[596px] md:w-[350px] lg:w-[450px] max-w-[500px]">
        <h2 className="text-6xl font-medium">Newbalance Running Sneakers</h2>
        <p className="text-2xl md:mt-2 mt-8">
          Shoes that transform your body language and attitude.
        </p>
        <a
          className="inline-block md:mt-5 mt-14 text-2xl font-medium border-b-4 border-inherit border-solid"
          href="#"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
}

export default AdBanner;
