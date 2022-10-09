import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../fetchers/products";
import { Product } from "./product";

export function WithReactQuery() {
  console.log("Render");

  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["products"],
    fetchProducts,
    { staleTime: 3000 }
  );

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log("Error: ", error);
    return <div>Error...</div>;
  }

  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      {data &&
        data.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}
