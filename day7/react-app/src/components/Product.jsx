import React from "react";

const Product = ({productName,price,description}) => {
  return (
    <div style={{ border: "1px solid  black", width: "300px" }}>
      <h2>{productName}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;
