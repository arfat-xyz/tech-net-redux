import { configureStore } from '@reduxjs/toolkit';
import { logger } from './middleware/logger';
import CartReducer from './features/cart/cartSlice';
import prodcutReducer from './features/products/productSlice';
import api from './api/apiSlice';
import userReducer from './features/user/userApi';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: prodcutReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger).concat(api.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, logger]),
});

// typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
