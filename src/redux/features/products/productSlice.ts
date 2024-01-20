import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type IProduct = {
  status: boolean;
  priceRange: number;
};
const initialState: IProduct = {
  status: false,
  priceRange: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});
export const { setPriceRange, setStatus } = productSlice.actions;
export default productSlice.reducer;
