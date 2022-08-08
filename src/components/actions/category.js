import { ADD_DATA } from "./Allactionstypes";
import { VIEW_DATA } from "./Allactionstypes";
const addData = (category) => {
  return (dispatch) => {
    dispatch({
      type: ADD_DATA,
      payload: category,
    });
  };
};

const viewData = (id) => {
  return (dispatch) => {
    dispatch({
      type: VIEW_DATA,
      payload: id,
    });
  };
};
export default { addData, viewData };
