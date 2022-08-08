import { ADD_DATATOBASKET } from "./Allactionstypes";
import { VIEW_DATATOBASKET } from "./Allactionstypes";
import { INCREASE_TO_BASKET_PRODUCT } from "./Allactionstypes";
const addDataToBasket = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_DATATOBASKET,
      payload: product,
    });
  };
};

const viewDataToBasket = (price) => {
  return (dispatch) => {
    dispatch({
      type: VIEW_DATATOBASKET,
      payload: price,
    });
  };
};

const increaseToBasketProduct = (name, qty, price, variant, extras) => {
  return {
    type: INCREASE_TO_BASKET_PRODUCT ,
    payload: { name, qty, price, variant, extras },
  };
};


const clearBasket = () => {
  return {
    type: "CLEAR_BASKET",
  };
};

export default { addDataToBasket, viewDataToBasket, clearBasket,increaseToBasketProduct };
