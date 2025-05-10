import iconShipping from "../assets/images/icon-shipping.png";
import iconRefund from "../assets/images/icon-refund.png";
import iconSupport from "../assets/images/icon-support.png";

function InfoBlock() {
  return (
    <div>
      <ul className="flex md:justify-around justify-center md:flex-row flex-col md:mt-24 mt-10 mb-8 font-medium">
        <li className="flex flex-col justify-center items-center mt-10">
          <img src={iconShipping} alt="" />
          <span className="mt-4">FREE SHIPPING</span>
        </li>
        <li className="flex flex-col justify-center items-center  mt-10">
          <img src={iconRefund} alt="" />
          <span className="mt-4">100% REFUND</span>
        </li>
        <li className="flex flex-col justify-center items-center  mt-10">
          <img src={iconSupport} alt="" />
          <span className="mt-4">SUPPORT 24/7</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoBlock;
