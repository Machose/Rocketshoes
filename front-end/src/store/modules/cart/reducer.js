import producer from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return producer(state, (draft) => {
        const { payload: product } = action;
        draft.push(product);
      });

    case '@cart/REMOVE':
      return producer(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.payload
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.payload.amount <= 0) {
        return state;
      }

      return producer(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
      });
    }

    default:
      return state;
  }
}
