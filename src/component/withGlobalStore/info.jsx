import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchProducts } from "../fetchers/products";

export function Info() {
  const products = useAppSelector((state) => state.products);

  const TotalNumberOfProducts = products?.length;
  const numberOfProductsOver300 = useMemo(
    () => products?.filter((p) => p.price >= 300).length
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-black">Products Info:</h1>
      <span className="text-xl font-bold text-blue-500">
        Toltal Products: {TotalNumberOfProducts}
      </span>
      <span className="text-xl font-bold text-red-500">
        Number of Products over 300$: {numberOfProductsOver300}
      </span>
    </div>
  );
}
