import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import ProductContent from "./ProductContent";
import "./index.scss";
import SafeComponent from "./SafeComponent";

const Header = React.lazy(() => import("home/Header")); // Adjust import path
const Footer = React.lazy(() => import("home/Footer")); // Adjust import path

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header app={{ name: "Product" }} />
        </Suspense>
      </SafeComponent>
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<ProductContent />} />
        </Routes>
      </div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
