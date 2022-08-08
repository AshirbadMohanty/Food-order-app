import { ADD_DATATOBASKET } from "../components/actions/Allactionstypes";
import { CLEAR_BASKET } from "../components/actions/Allactionstypes";
import { INCREASE_TO_BASKET_PRODUCT } from "../components/actions/Allactionstypes";
const initialState = {
  products: [],
};

const showBasket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATATOBASKET:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case CLEAR_BASKET:
      return {
        products: [],
      };

    case INCREASE_TO_BASKET_PRODUCT:
      return {
        ...state,
        products: state.products.map((prod) => {
          if (
            prod.name == action.payload.name &&
            prod.variant == action.payload.variant &&
            JSON.stringify(prod.extras) == JSON.stringify(action.payload.extras)
          ) {
            return {
              ...prod,
              qty: prod.qty + action.payload.qty,
              totalPrice: prod.totalPrice + action.payload.price,
            };
          } else {
            return prod;
          }
        }),
      };

    default:
      return state;
  }

};
export default showBasket;
