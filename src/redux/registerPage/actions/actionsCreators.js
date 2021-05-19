import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionsTypes";

export const registerRequest = (form) => ({
  type: REGISTER_REQUEST,
  payload: {
    form,
  },
});

export const registerSuccess = (obj) => {
  localStorage.setItem("token", JSON.stringify(obj.token));
  return {
    type: REGISTER_SUCCESS,
    payload: {
      obj,
    },
  };
};
