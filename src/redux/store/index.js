import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import loginAndRegisterPageReducer from "../reducers/loginAndRegisterPage";

import { loginEpic } from "../loginPage/epics/index";
import { registerEpic } from "../registerPage/epics/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  loginAndRegisterPage: loginAndRegisterPageReducer,
});

const epic = combineEpics(loginEpic, registerEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
