import Product from "./Product";
import { motion } from "framer-motion";

function Products({
  items = [],
  colsFullScreen = 4,
  colsTableScreen = 3,
  colsMobScreen = 2,
}) {
  return (
    <div
      className={`grid  xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-5`}
    >
      {items.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        >
          <Product product={product} />
        </motion.div>
      ))}
    </div>
  );
}

export default Products;
