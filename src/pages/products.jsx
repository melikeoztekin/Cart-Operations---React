import React from "react";
import { Product } from "../components/products";

const Products = (props) => {
  return (
    <div>
      <Product {...props} />
    </div>
  );
};
export { Products };
