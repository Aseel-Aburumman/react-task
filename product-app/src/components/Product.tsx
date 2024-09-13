import React from "react";

interface ProductProps {
  name: string;
  price?: number;
  instock?: boolean;
}

const Product: React.FC<ProductProps> = ({
  name,
  price = 10,
  instock = true,
}) => {
  return (
    <div className="card m-4 p-3">
      <h2 className="card-title">{name}</h2>
      <p>Price: ${price}</p>
      <p>Status: {instock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default Product;
