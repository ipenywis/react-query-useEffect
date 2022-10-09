import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { fetchCart, fetchProducts } from "../fetchers/products";
import { CartDrawer } from "./cartDrawer";
import { Product } from "./product";
import { WithReactQuery } from "./withReactQuery";

export function Cart() {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          onClick={toggleDrawer}
        >
          Show drawer
        </button>
      </div>

      {isOpen && <CartDrawer onClose={toggleDrawer} />}
    </>
  );
}
