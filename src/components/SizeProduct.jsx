import "../ThumbnailStyle.css";

function SizeProduct({ product = [], onChange }) {
  return (
    <div className="mt-5">
      <span>Size</span>
      <select className="ml-4" onChange={onChange}>
        {product.sizes.map((size, i) => (
          <option key={i} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SizeProduct;
