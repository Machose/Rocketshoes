import producer from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return producer(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.payload,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
