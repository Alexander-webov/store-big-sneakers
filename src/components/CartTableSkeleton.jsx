function CartTableSkeleton() {
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
          {/* 4 rows skeleton */}
          {[...Array(4)].map((_, index) => (
            <tr key={index} className="animate-pulse">
              <td className="border border-gray-300 px-4 py-6">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </td>
              <td className="border border-gray-300 px-4 py-6">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </td>
              <td className="border border-gray-300 px-4 py-6">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </td>
              <td className="border border-gray-300 px-4 py-6">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTableSkeleton;
