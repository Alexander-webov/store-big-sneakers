import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalPay } from "../features/cart/cartSlice";
import { addItemInOrder } from "../features/order/orderSlice";
import { v4 as uuidv4 } from "uuid"; // uniq id
function Checkout() {
  const dispatch = useDispatch();
  const total = useSelector(getTotalPay);
  const cart = useSelector(getCart);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      cart,
      total,
      status: "Processing",
    };

    dispatch(addItemInOrder(newOrder));
    setSubmitted(true);

    dispatch(clearCart());
  }

  if (submitted) {
    return (
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold mb-4">
          Thank you for your order! 🎉
        </h2>
        <p>We have received your payment and are processing your order.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-5 border rounded shadow">
      <h2 className="text-xl font-bold mb-5">Checkout</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <div className="flex gap-2">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            required
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={formData.cvc}
            onChange={handleChange}
            required
            className="border p-2 rounded flex-1"
          />
        </div>
        <p className="font-bold text-lg">
          Total to pay:
          <span className="text-blue-500"> ${total}</span>
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Checkout;
