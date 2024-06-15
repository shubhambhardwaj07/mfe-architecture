import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import "./index.scss";

import ProductContent from "product/ProductContent";
import CartContent from "cart/CartContent";
import HomeContent from "home/HomeContent";

const Header = React.lazy(() => import("home/Header")); // Adjust import path
const Footer = React.lazy(() => import("home/Footer")); // Adjust import path

const MainLayout = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header app={{ name: "Product" }} />
      </Suspense>

      <div className="my-10">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/product/:id" element={<ProductContent />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};
export default MainLayout;
