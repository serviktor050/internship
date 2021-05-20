import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  userData: null,
};

export default function userPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        userData: null,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        userData: action.payload.userData,
      };
    default:
      return state;
  }
}
