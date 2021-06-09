import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Timer() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Таймер</h1>
    </>
  );
}
