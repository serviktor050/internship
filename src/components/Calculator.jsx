import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  realtyOn,
  creditOn,
  paymentOn,
} from "../redux/mortgageCalculator/actions/actionsCreators";
import RealtyForm from "./MortgageCalculatorForms/RealtyForm";
import CreditForm from "./MortgageCalculatorForms/CreditForm";
import PaymentForm from "./MortgageCalculatorForms/PaymentForm";

export default function Calculator() {
  const { realty, credit, payment } = useSelector(
    (state) => state.mortgageCalculator
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(realtyOn());
  }, [dispatch]);

  return (
    <>
      <div className="calculator">
        <div className="menu-and-form">
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
          {realty && (
            <div className="form">
              <RealtyForm />
            </div>
          )}
          {credit && (
            <div className="form">
              <CreditForm />
            </div>
          )}
          {payment && (
            <div className="form">
              <PaymentForm />
            </div>
          )}
        </div>
        <div className="info"></div>
      </div>
    </>
  );
}
