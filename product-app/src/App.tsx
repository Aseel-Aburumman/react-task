import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Product from "./components/Product";
import React from "react";

function App() {
  return (
    <>
      <div className="container mt-5">
        <Product name="Laptop" />

        <Product name="Smartphone" price={699} instock={false} />

        <Product name="Tablet" price={299} />
      </div>
    </>
  );
}
export default App;
