import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

function RatingProduct({ rating = 5, size = 100 }) {
  return <Rating style={{ maxWidth: size }} value={rating} readOnly />;
}

export default RatingProduct;
