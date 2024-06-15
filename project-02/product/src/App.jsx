import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import ProductContent from "./ProductContent";
import { Switch, Route } from "react-router-dom";

import "./index.scss";
import SafeComponent from "./SafeComponent";

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Suspense fallback="<div>Loading...</div>">
          <Header app={{ name: "Product" }} />
        </Suspense>
      </SafeComponent>
      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={<ProductContent />} />
        </Switch>
      </div>
      <Suspense fallback="<div>Loading...</div>">
        <Footer />
      </Suspense>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
