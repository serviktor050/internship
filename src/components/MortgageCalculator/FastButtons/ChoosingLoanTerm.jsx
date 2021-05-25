import React from "react";
import { useDispatch } from "react-redux";
import { changeLoanTermField } from "../../../redux/mortgageCalculator/form/actions/actionsCreators";

export default function ChoosingLoanTerm() {
  const dispatch = useDispatch();

  return (
    <div className="input-buttons">
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeLoanTermField(5));
        }}
      >
        <input type="radio" id="5years" name="choosingLoanTerm" />
        <label htmlFor="5years">5 лет</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeLoanTermField(10));
        }}
      >
        <input type="radio" id="10years" name="choosingLoanTerm" />
        <label htmlFor="10years">10 лет</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeLoanTermField(15));
        }}
      >
        <input type="radio" id="15years" name="choosingLoanTerm" />
        <label htmlFor="15years">15 лет</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeLoanTermField(20));
        }}
      >
        <input type="radio" id="20years" name="choosingLoanTerm" />
        <label htmlFor="20years">20 лет</label>
      </div>
    </div>
  );
}
