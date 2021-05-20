import { LIST_USERS_REQUEST, LIST_USERS_SUCCESS } from "./actionsTypes";

export const listUsersRequest = (page) => ({
  type: LIST_USERS_REQUEST,
  payload: { page },
});

export const listUsersSuccess = (response) => ({
  type: LIST_USERS_SUCCESS,
  payload: { response },
});
