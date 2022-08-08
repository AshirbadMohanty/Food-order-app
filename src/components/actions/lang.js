import { SET_LANG } from "./Allactionstypes";
const setLang = (lang) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
};

export default {
  setLang,
};
