import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from "./actionsTypes";

export const fetchUserDataRequest = () => ({
  type: FETCH_USER_DATA_REQUEST,
});

export const fetchUserDataSuccess = (userData) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: {
    userData,
  },
});
