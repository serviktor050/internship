import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  realtyOn,
  creditOn,
  paymentOn,
} from "../../redux/mortgageCalculator/actions/actionsCreators";
import RealtyForm from "./CalculatorForms/RealtyForm";
import CreditForm from "./CalculatorForms/CreditForm";
import PaymentForm from "./CalculatorForms/PaymentForm";
import CreditInformation from "./CreditInformation";

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
          <form>
            <div className="form-and-info">
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
              <div className="info">
                {realty && (
                  <div className="total">
                    <div className="total-name">
                      <p>Ваш ежемесячный платеж</p>
                    </div>
                    <div className="total-value">
                      <h2> ₽</h2>
                    </div>
                  </div>
                )}
                {credit && (
                  <div className="total">
                    <div className="total-name">
                      <p>Ваш ежемесячный платеж</p>
                    </div>
                    <div className="total-value">
                      <h2> ₽</h2>
                    </div>
                  </div>
                )}

                {payment && (
                  <div className="total">
                    <div className="total-name">
                      <p>Стоимость недвижимости</p>
                    </div>
                    <div className="total-value">
                      <h2> ₽</h2>
                    </div>
                  </div>
                )}
                <CreditInformation />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
