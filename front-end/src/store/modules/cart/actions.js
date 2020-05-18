export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: id,
  };
}

export function updateProductAmountFromCart(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}
