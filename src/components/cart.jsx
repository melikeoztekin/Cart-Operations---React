import "./cart.css";
import React from "react";

const CartItem = (props) => {
  return (
    <>
      <div className="cart-product d-flex justify-content-between align-items-center">
        <div className="cart-p-img img-fluid">
          <img
            className="img-fluid"
            src={props.basketItem.product.productImage}
            alt=""
          />
        </div>
        <div className="cart-p-detail px-3">
          {props.basketItem.product.productHeader}
          <span className="d-block">
            {props.basketItem.product.productPrice}
          </span>
        </div>
        <div className="cart-p-count text-center">
          <div>
            <i className="fa fa-plus"></i>
          </div>
          {props.basketItem.productCount}
          <div>
            <i className="fa fa-minus"></i>
          </div>
        </div>
      </div>
      <div className="cart-p-footer p-2 d-flex justify-content-between align-items-center">
        <button
          className="btn btn-outline-warning"
          onClick={() => props.productDelete(props.basketItem.product.id)}
        >
          <i className="fas fa-trash"></i> Delete
        </button>
        <div className="">Total : {props.basketItem.totalPrice}</div>
      </div>
    </>
  );
};

const Cart = (props) => {
  return (
    <div className="cart-container bg-light p-3 text-dark rounded">
      <h2 className="cart-header pb-3">Shopping Cart</h2>
      <>
        {props.basketList.map((basketItem) => {
          return (
            <CartItem
              basketItem={basketItem}
              productDelete={props.productDelete}
              key={basketItem.product.id}
            />
          );
        })}
      </>
      <div className="cart-footer p-2 d-flex align-items-center justify-content-between border-top">
        <button className="btn btn-danger" onClick={props.basketAllDelete}>
          <i className="fas fa-trash"></i> Remove All
        </button>
        <div>Total Price : {props.basketTotalPrice}</div>
      </div>
    </div>
  );
};

export { Cart };
