import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLoanAmountField,
  changeLoanTermField,
  changeInterestRateField,
} from "../../../redux/mortgageCalculator/form/actions/actionsCreators";
import ChoosingLoanTerm from "../FastButtons/ChoosingLoanTerm";
import ChoosingInterestRate from "../FastButtons/ChoosingInterestRate";
import { Slider } from "antd";

export default function CreditForm() {
  const dispatch = useDispatch();

  const { loanTerm, loanAmount, interestRate } = useSelector(
    (state) => state.mortgageCalculatorForm
  );

  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Сумма кредита</div>
        <div className="form-item-input">
          <input
            type="text"
            name="loanAmount"
            onChange={(evt) => {
              dispatch(changeLoanAmountField(evt.target.value));
            }}
            value={loanAmount}
          />
          <Slider
            defaultValue={0}
            min={0}
            max={99999999}
            onChange={(value) => {
              dispatch(changeLoanAmountField(value));
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
