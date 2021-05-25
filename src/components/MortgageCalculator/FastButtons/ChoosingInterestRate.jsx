import React from "react";
import { useDispatch } from "react-redux";
import { changeInterestRateField } from "../../../redux/mortgageCalculator/form/actions/actionsCreators";

export default function ChoosingInterestRate() {
  const dispatch = useDispatch();

  return (
    <div className="input-buttons">
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeInterestRateField(4.5));
        }}
      >
        <input type="radio" id="4,5%" name="choosingInterestRate" />
        <label htmlFor="4,5%">4,5%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeInterestRateField(6));
        }}
      >
        <input type="radio" id="6%" name="choosingInterestRate" />
        <label htmlFor="6%">6%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeInterestRateField(7.5));
        }}
      >
        <input type="radio" id="7,5%" name="choosingInterestRate" />
        <label htmlFor="7,5%">7,5%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeInterestRateField(9.1));
        }}
      >
        <input type="radio" id="9,1%" name="choosingInterestRate" />
        <label htmlFor="9,1%">9,1%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          dispatch(changeInterestRateField(10));
        }}
      >
        <input type="radio" id="10%" name="choosingInterestRate" />
        <label htmlFor="10%">10%</label>
      </div>
    </div>
  );
}
