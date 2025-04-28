function CartTable({ cart }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">
              PRODUCT
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              PRICE
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">QTY</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              UNIT PRICE
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-3">
                <div className="flex">
                  <button>x</button>
                  <img className="w-32" src={product.image} alt="" />
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">${product.price}</div>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">{product.quantity}</div>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">{product.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
