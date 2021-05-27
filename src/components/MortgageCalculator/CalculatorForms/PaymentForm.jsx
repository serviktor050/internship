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
import { Slider } from "antd";

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
          <Slider
            defaultValue={2000}
            min={2000}
            max={999999}
            onChange={(value) => {
              dispatch(changeMonthlyPaymentField(value));
            }}
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
          <Slider
            defaultValue={0}
            min={0}
            max={99499999}
            onChange={(value) => {
              dispatch(changeInitialPaymentField(value));
            }}
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
          <Slider
            defaultValue={1}
            min={1}
            max={30}
            onChange={(value) => {
              dispatch(changeLoanTermField(value));
            }}
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
          <Slider
            defaultValue={1}
            min={1}
            max={30}
            step={0.1}
            onChange={(value) => {
              dispatch(changeInterestRateField(value));
            }}
          />
        </div>
        <ChoosingInterestRate />
      </div>
    </>
  );
}
