import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  realtyOn,
  creditOn,
  paymentOn,
} from "../redux/mortgageCalculator/actions/actionsCreators";

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
          {realty && <div className="form">форма Недвижимость</div>}
          {credit && <div className="form">форма Кредит</div>}
          {payment && <div className="form">форма Платеж</div>}
        </div>
        <div className="info"></div>
      </div>
    </>
  );
}

// Пример для фйормы на будущее
/* <div className="form-item">
              <div className="form-item-name">
                <p>Стоимость недвижимости</p>
              </div>
              <div className="form-item-input">
                <input type="text" />
              </div>
            </div>
            <div className="form-item">
              <div className="form-item-name">
                <p>Первоначальный взнос</p>
              </div>
              <div className="form-item-input">
                <input type="text" />
              </div>
            </div>
            <div className="form-item">
              <div className="form-item-name">
                <p>Срок кредита</p>
              </div>
              <div className="form-item-input">
                <input type="text" />
              </div>
            </div>
            <div className="form-item"> 
              <div className="form-item-name">
                <p>Процентная ставка</p>
              </div>
              <div className="form-item-input">
                <input type="text" />
              </div>
            </div>*/
