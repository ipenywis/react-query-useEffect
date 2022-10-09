import axios from "axios";

export const fetchProducts = async () => {
  console.log("Fetching products");
  const response = await axios.get("http://localhost:3000/products");
  const products = response.data;

  console.log("Products: ", products);
  return products;
};

export const fetchCart = async () => {
  console.log("Fetching Cart");
  const response = await axios.get("http://localhost:3000/cart");
  const cart = response.data;

  console.log("Cart: ", cart);
  return cart;
};
