import { Middleware } from '@reduxjs/toolkit';

export const logger: Middleware = (store) => (next) => (action) => {
  console.log('Previous State: ', store.getState());
  console.log('Action: ', action);
  next(action);
  console.log('Next State: ', store.getState());
  console.log('\n\n');
};
