import { useSelector } from "react-redux";
import { getOrders } from "./orderSlice";

function OrderHistory() {
  const orders = useSelector(getOrders);
  return (
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
  );
}

export default OrderHistory;
