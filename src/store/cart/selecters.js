const getState = (state) => state.cart;

export const getItems = (state) => getState(state).items;
export const getItemCount = (state) => getItems(state).length;
export const getItemTotalPrice = (state) => 123;
export const getItemShippingFeePrice = (state) => 123;
