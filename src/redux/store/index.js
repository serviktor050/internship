import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import loginAndRegisterPageReducer from "../reducers/loginAndRegisterPage";
import listUsersPageReducer from "../listUsersPage/reducers/listUsersPage";
import userPageReducer from "../userPage/reducers/userPage";
import mortgageCalculatorReducer from "../mortgageCalculator/reducers/mortgageCalculator";

import { loginEpic } from "../loginPage/epics/index";
import { registerEpic } from "../registerPage/epics/index";
import { listUsersEpic } from "../listUsersPage/epics/index";
import { userPageEpic } from "../userPage/epics/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  loginAndRegisterPage: loginAndRegisterPageReducer,
  listUsersPage: listUsersPageReducer,
  userPage: userPageReducer,
  mortgageCalculator: mortgageCalculatorReducer,
});

const epic = combineEpics(loginEpic, registerEpic, listUsersEpic, userPageEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
