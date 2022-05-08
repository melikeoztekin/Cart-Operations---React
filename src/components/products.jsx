import React from "react";
import "./products.css";

const Card = (props) => {
  return (
    <div className="col-p col-p-md col-p-lg my-3 m-auto p-0 text-center rounded card-container">
      <div className="card-header py-3 bg-white">
        {props.product.productHeader}
      </div>
      <img className="card-img" src={props.product.productImage} alt="" />
      <div className="card-footer bg-white">
        <div className="card-price">{props.product.productPrice}</div>
        {
          <button
            onClick={() => {
              props.addCartProduct(props.product);
            }}
            className="card-button rounded"
          >
            Add to cart
          </button>
        }
      </div>
    </div>
  );
};

const Product = (props) => {
  return (
    <div className="container p-5">
      <h2 className="text-center py-5">Product List</h2>
      <div className="row justify-content-start">
        {props.products.map((item) => {
          return (
            <Card
              addCartProduct={props.addCartProduct}
              product={item}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Product };
