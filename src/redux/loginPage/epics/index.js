import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap } from "rxjs/operators";
import { LOGIN_REQUEST } from "../actions/actionsTypes";
import { loginSuccess } from "../../loginPage/actions/actionsCreators";

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_REQUEST),
    map((o) => o.payload.form),
    switchMap((form) => {
      return ajax({
        url: "https://reqres.in/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).pipe(map((o) => loginSuccess(o.response)));
    })
  );
