import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { WithReactQuery } from "./component/withReactQuery/withReactQuery";
import { Info } from "./component/withReactQuery/info";
import { Cart } from "./component/withReactQuery/cart";

function App() {
  return (
    <div className="flex min-w-full justify-center items-center">
      <div className="flex flex-col">
        <Cart />
        <Info />
        <WithReactQuery />
      </div>
    </div>
  );
}

export default App;
