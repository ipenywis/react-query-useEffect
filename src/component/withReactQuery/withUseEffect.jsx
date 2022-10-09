import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./product";

export function WithUseEffect() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      console.log("Started fetching");
      const response = await axios.get("http://localhost:3000/products");
      const products = response.data;

      console.log("Products: ", products);
      if (products) setProducts(products);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    console.log("Component mounted");
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
