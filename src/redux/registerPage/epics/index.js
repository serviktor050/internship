import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap } from "rxjs/operators";
import { REGISTER_REQUEST } from "../actions/actionsTypes";
import { registerSuccess } from "../actions/actionsCreators";

export const registerEpic = (action$) =>
  action$.pipe(
    ofType(REGISTER_REQUEST),
    map((o) => o.payload.form),
    switchMap((form) => {
      return ajax({
        url: "https://reqres.in/api/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).pipe(map((o) => registerSuccess(o.response)));
    })
  );
