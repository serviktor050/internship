import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_INIT } from "./actionsTypes";

export const loginRequest = (form) => ({
  type: LOGIN_REQUEST,
  payload: {
    form,
  },
});

export const loginSuccess = (obj) => {
  localStorage.setItem("token", JSON.stringify(obj.token));
  return {
    type: LOGIN_SUCCESS,
    payload: {
      obj,
    },
  };
};

export const loginInit = () => {
  localStorage.removeItem("token");
  return {
    type: LOGIN_INIT,
  };
};
