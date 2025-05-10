import { useState } from "react";
import { getOrders } from "../features/order/orderSlice";
import { useSelector } from "react-redux";
import OrderHistory from "../features/order/OrderHistory";

function MyProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY, USA",
  });
  const [newUser, setNewUser] = useState(user);

  function onEditProfile() {
    setIsEdit(true);
  }
  function handelForm(e) {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUser(newUser);
    setIsEdit(false);
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
      <div className="bg-[#F6F7F8] p-5 rounded shadow mb-8">
        {!isEdit ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">Account Information</h3>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            {!isEdit ? (
              <button
                className="mt-4 bg-[#4440FF] text-white px-10 py-3 rounded text-center block hover:bg-[#3330d0] transition"
                onClick={onEditProfile}
              >
                Edit Profile
              </button>
            ) : null}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4">Account Information</h3>
            <p className="mb-2">
              <strong>Name:</strong>
              in
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={newUser.name}
                onChange={handelForm}
                name="name"
              />
            </p>
            <p className="mb-2">
              <strong>Email:</strong>
              <input
                type="email"
                className="w-full border p-2 rounded"
                value={newUser.email}
                name="email"
                onChange={handelForm}
              />
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>
              <input
                type="tel"
                className="w-full border p-2 rounded"
                value={newUser.phone}
                name="phone"
                onChange={handelForm}
              />
            </p>
            <p className="mb-2">
              <strong>Address:</strong>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={newUser.address}
                name="address"
                onChange={handelForm}
              />
            </p>
            {isEdit ? (
              <button
                type="submit"
                className="mt-4 bg-[#4440FF] text-white px-10 py-3 rounded text-center block hover:bg-[#3330d0] transition"
              >
                Save
              </button>
            ) : null}
          </form>
        )}
      </div>

      <OrderHistory />
    </div>
  );
}

export default MyProfile;
