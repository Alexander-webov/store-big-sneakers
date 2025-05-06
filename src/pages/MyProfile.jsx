import { useState } from "react";

function MyProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY, USA",
  });
  const [newUser, setNewUser] = useState(user);
  const orders = [
    {
      id: "001",
      date: "2024-04-12",
      total: "$150.00",
      status: "Delivered",
    },
    {
      id: "002",
      date: "2024-03-20",
      total: "$89.99",
      status: "Shipped",
    },
  ];

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

      {/* Order History */}
      <div className="bg-[#F6F7F8] p-5 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Order History</h3>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Order ID</th>
                <th className="border px-4 py-2 text-left">Date</th>
                <th className="border px-4 py-2 text-left">Total</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.date}</td>
                  <td className="border px-4 py-2">{order.total}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
