import React from "react";
import "./products.css";

const Card = (props) => {
  return (
    <div className="col-p col-p-md col-p-lg mb-3 m-auto p-0 text-center rounded card-container">
      <div className="card-header">{props.product.productHeader}</div>
      <img className="card-img" src={props.product.productImage} alt="" />
      <div className="card-footer">
        <div className="card-price">{props.product.productPrice}</div>
        {
          <button
            onClick={() => {
              props.addCart(props.product);
            }}
            className="card-button"
          >
            Sepete Ekle
          </button>
        }
      </div>
    </div>
  );
};

const Product = (props) => {
  return (
    <div className="container px-4">
      <h2 className="text-center py-5">Product List</h2>
      <div className="row product-container">
        {props.products.map((item) => {
          return (
            <Card addCart={props.sepetUrunEkle} product={item} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export { Product };