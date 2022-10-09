const initialState = { products: [], cart: [] };

const productsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setProducts, setCart } = productsSlice.actions;
export default productsSlice.reducer;
