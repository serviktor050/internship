import {
  LIST_USERS_REQUEST,
  LIST_USERS_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  data: null,
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
        data: action.payload.response.data,
      };
    default:
      return state;
  }
}
