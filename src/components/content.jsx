import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";

const Content = (props) => {
  return (
    <div className="mb-2 mt-2" style={{}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pages/products"
          element={
            <Products
              sepetUrunEkle={props.sepetUrunEkle}
              products={props.products}
            />
          }
        />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export { Content };
