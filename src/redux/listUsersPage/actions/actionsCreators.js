import { LIST_USERS_REQUEST, LIST_USERS_SUCCESS } from "./actionsTypes";

export const listUsersRequest = () => ({
  type: LIST_USERS_REQUEST,
});

export const listUsersSuccess = (response) => ({
  type: LIST_USERS_SUCCESS,
  payload: { response },
});
