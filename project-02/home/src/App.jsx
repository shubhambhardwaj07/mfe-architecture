import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import MainLayout from "./MainLayout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>,
  document.getElementById("app")
);
