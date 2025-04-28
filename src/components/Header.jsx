import iconUser from "../assets/images/icon-user.svg";
import iconSearch from "../assets/images/search-icon.svg";
import iconCard from "../assets/images/icon-card.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((store) => store.cart.cart);

  const quantityInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="py-7">
      <div>
        <nav className="flex justify-between items-center">
          <select>
            <option value="en">en</option>
            <option value="en">en</option>
          </select>
          <ul className="flex  items-center">
            <li>
              <NavLink to="/profile" className="flex items-center mr-10">
                <img className="h-6 mr-1" src={iconUser} alt=" My profile" />
                <span>My profile</span>
              </NavLink>
            </li>
            <li className="mr-10 relative">
              <NavLink to="/cart">
                <img src={iconCard} alt="cart" />
                <span className="flex justify-center items-center absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-[#FB7181] text-white text-xs border-white border-2">
                  {quantityInCart}
                </span>
              </NavLink>
            </li>
            <li className="flex items-center relative">
              <img className="absolute left-1" src={iconSearch} alt="search" />
              <input
                className="outline outline-2 outline-offset-2 outline-gray-400 rounded-lg pl-7"
                type="text"
              />
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav className="mt-7">
          <ul className="flex font-bold text-xl">
            <li className="flex-1 ">
              <NavLink to="/">BIG-SNEAKERS</NavLink>
            </li>
            <li className="mr-10">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="mr-10">
              <NavLink to="/products">SNEAKERS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
