import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ICartState = {
  products: IProduct[];
  total: number;
};
const initialState: ICartState = {
  products: [],
  total: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exist = state.products.find((p) => p._id === action.payload._id);
      if (exist) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        exist.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (p) => p._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
    reduceQuantity: (state, action: PayloadAction<IProduct>) => {
      const exist = state.products.find((p) => p._id === action.payload._id);
      if (exist && exist.quantity! > 1) {
        exist.quantity! -= 1;
      } else {
        state.products = state.products.filter(
          (p) => p._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
  },
});
export const { addToCart, reduceQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
