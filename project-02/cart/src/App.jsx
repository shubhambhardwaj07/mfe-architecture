import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "Cart" }} />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
