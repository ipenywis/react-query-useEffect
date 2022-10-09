import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchCart } from "../../fetchers/products";
import { Product } from "./product";

export function CartDrawer(props) {
  const { onClose } = props;

  const dispatch = useDispatch();

  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);

  const isRefetchCart = useAppSelector((state) => state.isRefetchCart);

  const fetchCartProducts = async () => {
    const cart = await fetchCart();
    dispatch(setCart(cart));
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (isRefetchCart) fetchCartProducts();
  }, [isRefetchCart]);

  const cartProducts = useMemo(
    () =>
      products &&
      products.filter((product) => cart?.some((c) => c.id === product.id))
  );

  if (cartQuery.isLoading) return <div>Loading...</div>;

  return (
    <div
      id="drawer-example"
      className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Your Cart
      </h5>
      <button
        type="button"
        onClick={onClose}
        data-drawer-dismiss="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="flex flex-col">
        <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
          {/* <p>Expensive calculation - {n}</p> */}
          {cartProducts &&
            cartProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
