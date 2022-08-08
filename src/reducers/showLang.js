import { LOCALES } from "../components/i18n";
import { SET_LANG } from "../components/actions/Allactionstypes";

const initialState = LOCALES.ENGLISH;
const lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return action.payload;

    default:
      return state;
  }
};

export default lang;
