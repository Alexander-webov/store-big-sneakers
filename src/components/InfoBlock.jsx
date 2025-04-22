import iconShipping from "../assets/images/icon-shipping.png";
import iconRefund from "../assets/images/icon-refund.png";
import iconSupport from "../assets/images/icon-support.png";

function InfoBlock() {
  return (
    <div>
      <ul className="flex justify-around mt-24 mb-8 font-medium">
        <li className="flex flex-col justify-center items-center">
          <img src={iconShipping} alt="" />
          <span className="mt-4">FREE SHIPPING</span>
        </li>
        <li className="flex flex-col justify-center items-center ">
          <img src={iconRefund} alt="" />
          <span className="mt-4">100% REFUND</span>
        </li>
        <li className="flex flex-col justify-center items-center ">
          <img src={iconSupport} alt="" />
          <span className="mt-4">SUPPORT 24/7</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoBlock;
