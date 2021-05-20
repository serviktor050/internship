import {
  LIST_USERS_REQUEST,
  LIST_USERS_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  response: null,
};

export default function listUsersPageReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_USERS_REQUEST:
      return {
        ...state,
      };
    case LIST_USERS_SUCCESS:
      return {
        ...state,
        response: action.payload.response,
      };
    default:
      return state;
  }
}
