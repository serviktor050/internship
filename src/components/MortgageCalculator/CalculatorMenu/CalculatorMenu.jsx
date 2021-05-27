import React from "react";
import { useDispatch } from "react-redux";
import {
  realtyOn,
  creditOn,
  paymentOn,
} from "../../../redux/mortgageCalculator/menu/actions/actionsCreators";

export default function CalculatorMenu() {
  const dispatch = useDispatch();
  return (
    <div className="menu">
      <div
        className="form-type-button"
        onClick={() => {
          dispatch(realtyOn());
        }}
      >
        <input
          type="radio"
          id="realty"
          name="radioFormType"
          defaultChecked="checked"
        />
        <label htmlFor="realty">Недвижимость</label>
      </div>
      <div
        className="form-type-button"
        onClick={() => {
          dispatch(creditOn());
        }}
      >
        <input type="radio" id="credit" name="radioFormType" />
        <label htmlFor="credit">Кредит</label>
      </div>
      <div
        className="form-type-button"
        onClick={() => {
          dispatch(paymentOn());
        }}
      >
        <input type="radio" id="payment" name="radioFormType" />
        <label htmlFor="payment">Платеж</label>
      </div>
    </div>
  );
}
