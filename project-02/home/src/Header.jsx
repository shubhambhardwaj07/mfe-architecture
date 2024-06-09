import React from "react";
import "./index.scss";

function Header({ app }) {
  return <div className="text">Fidget Spinners | {app.name}</div>;
}

export default Header;
