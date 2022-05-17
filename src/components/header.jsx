import React from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "./cart";
import "./header.css";

const menuItems = [
  {
    id: 1,
    text: "Home",
    to: "/",
  },
  {
    id: 2,
    text: "Products",
    to: "/pages/products",
  },
  {
    id: 3,
    text: "About",
    to: "/pages/about",
  },
  {
    id: 4,
    text: "Contact",
    to: "/pages/contact",
  },
];

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Site Name
          </NavLink>
          <div className="head-icon d-flex d-lg-none">
            <button className="basketButton btn btn-dark text-warning">
              <i className="fa fa-basket-shopping"></i>
              <div className="basket">
                <Cart
                  basketList={props.basketList}
                  productDelete={props.productDelete}
                  basketAllDelete={props.basketAllDelete}
                  basketTotalPrice={props.basketTotalPrice}
                  productUp={props.productUp}
                  productDown={props.productDown}
                />
              </div>
            </button>
            <NavLink
              className="loginButton btn btn-dark text-info"
              to="/pages/login"
            >
              <i className="fa fa-user"></i>
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((item) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <NavLink className="nav-link" to={item.to}>
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="d-flex d-none d-lg-block d-xl-block">
              <button className="basketButton btn btn-dark text-warning">
                <i className="fa fa-basket-shopping"></i>&nbsp; Cart
                <div className="basket">
                  <Cart
                    basketList={props.basketList}
                    productDelete={props.productDelete}
                    basketAllDelete={props.basketAllDelete}
                    basketTotalPrice={props.basketTotalPrice}
                    productUp={props.productUp}
                    productDown={props.productDown}
                  />
                </div>
              </button>
              <NavLink
                className="loginButton btn btn-dark text-info"
                to="/pages/login"
              >
                <i className="fa fa-user"></i>&nbsp; Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export { Header };
