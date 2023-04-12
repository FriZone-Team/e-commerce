const setQtyCart =
  (f) =>
  (state, { payload }) => {
    const items = Array.from(state.items);
    let item = items.find((item) => item.productId === payload.id);
    if (!item) {
      item = {
        product: payload,
        productId: payload.id,
        qty: 0,
      };
      items.push(item);
    }
    items[items.indexOf(item)] = f(item);
    return {
      ...state,
      items,
    };
  };

export const addQtyCart = setQtyCart((item) => ({
  ...item,
  qty: item.qty + 1,
}));
export const removeQtyCart = setQtyCart((item) => ({
  ...item,
  qty: item.qty - 1,
}));
export const changeQtyCart = (state, { payload }) => {
  setQtyCart((item) => ({
    ...item,
    qty: payload.qty,
  }))(state, {
    payload: payload.product,
  });
};

export const removeCart = (state, { payload }) => {
  const items = state.items.filter((item) => item.productId !== payload.id);
  return {
    ...state,
    items,
  };
};

export const clearCart = (state) => {
  return {
    ...state,
    items: [],
  };
};

export const setItems = (state, { payload }) => {
  return {
    ...state,
    items: payload,
  };
};
