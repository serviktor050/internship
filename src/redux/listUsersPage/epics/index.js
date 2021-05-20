import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap } from "rxjs/operators";
import { LIST_USERS_REQUEST } from "../actions/actionsTypes";
import { listUsersSuccess } from "../actions/actionsCreators";

export const listUsersEpic = (actions$) =>
  actions$.pipe(
    ofType(LIST_USERS_REQUEST),
    map((o) => o.payload.page),
    switchMap((page) =>
      ajax
        .getJSON(`https://reqres.in/api/users?page=${page}`)
        .pipe(map((o) => listUsersSuccess(o)))
    )
  );
