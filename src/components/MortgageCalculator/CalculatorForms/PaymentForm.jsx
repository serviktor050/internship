import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMonthlyPaymentField,
  changeInitialPaymentField,
  changeLoanTermField,
  changeInterestRateField,
} from "../../../redux/mortgageCalculator/form/actions/actionsCreators";
import ChoosingLoanTerm from "../FastButtons/ChoosingLoanTerm";
import ChoosingInterestRate from "../FastButtons/ChoosingInterestRate";

export default function PaymentForm() {
  const dispatch = useDispatch();

  const { initialPayment, loanTerm, interestRate, monthlyPayment } =
    useSelector((state) => state.mortgageCalculatorForm);

  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Ежемесячный платеж</div>
        <div className="form-item-input">
          <input
            type="text"
            name="monthlyPayment"
            onChange={(evt) => {
              dispatch(changeMonthlyPaymentField(evt.target.value));
            }}
            value={monthlyPayment}
          />
        </div>
      </div>
      <div className="form-item">
        <div className="form-item-name">Первоначальный взнос</div>
        <div className="form-item-input">
          <input
            type="text"
            name="initialPayment"
            onChange={(evt) => {
              dispatch(changeInitialPaymentField(evt.target.value));
            }}
            value={initialPayment}
          />
        </div>
      </div>
      <div className="form-item">
        <div className="form-item-name">Срок кредита</div>
        <div className="form-item-input">
          <input
            type="text"
            name="loanTerm"
            onChange={(evt) => {
              dispatch(changeLoanTermField(evt.target.value));
            }}
            value={loanTerm}
          />
        </div>
        <ChoosingLoanTerm />
      </div>
      <div className="form-item">
        <div className="form-item-name">Процентная ставка</div>
        <div className="form-item-input">
          <input
            type="text"
            name="interestRate"
            onChange={(evt) => {
              dispatch(changeInterestRateField(evt.target.value));
            }}
            value={interestRate}
          />
        </div>
        <ChoosingInterestRate />
      </div>
    </>
  );
}
