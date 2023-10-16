import React, { Suspense } from "react";

const App1 = React.lazy(() => import("AppOne/App1"));
const App2 = React.lazy(() => import("AppTwo/App2"));

const App = () => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1>Host App</h1>
    </div>
  );
};

export default App;
