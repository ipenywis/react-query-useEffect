import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./product";

export function WithUseEffect() {
  const products = useAppState((state) => state.products);

  const fetchProducts = async () => {
    console.log("Started fetching");
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;

    console.log("Products: ", products);
    if (products) dispatch(setProducts(products));
  };

  useEffect(() => {
    console.log("Component mounted");
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
