import { produce } from 'immer';

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        draft.cart.push(action.payload.item);
      });

    case 'REMOVE_FROM_CART': {
      return state;
    }

    default:
      return state;
  }
}
