import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap } from "rxjs/operators";
import { FETCH_USER_DATA_REQUEST } from "../actions/actionsTypes";
import { fetchUserDataSuccess } from "../actions/actionsCreators";

export const userPageEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_USER_DATA_REQUEST),
    switchMap(() =>
      ajax
        .getJSON("https://reqres.in/api/users?page=2&id=7")
        .pipe(map((o) => fetchUserDataSuccess(o)))
    )
  );
