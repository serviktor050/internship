import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_INIT,
} from "../loginPage/actions/actionsTypes";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../registerPage/actions/actionsTypes";

const initialState = {
  userToken: null,
};

export default function loginAndRegisterPageReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        userToken: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userToken: action.payload.obj,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        userToken: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userToken: action.payload.obj,
      };
    case LOGIN_INIT:
      return { ...initialState };
    default:
      return state;
  }
}
