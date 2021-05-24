import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function MortgageCalculator() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);
  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Ипотечный калькулятор</h1>
      <p>С возможностью расчета досрочного погашения</p>
    </>
  );
}
