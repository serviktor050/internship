import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCostOfRealEstateField,
  changeInitialPaymentField,
  changeLoanTermField,
  changeInterestRateField,
} from "../../../redux/mortgageCalculator/form/actions/actionsCreators";
import ChoosingInitialPayment from "../FastButtons/ChoosingInitialPayment";
import ChoosingLoanTerm from "../FastButtons/ChoosingLoanTerm";
import ChoosingInterestRate from "../FastButtons/ChoosingInterestRate";
import { Slider } from "antd";

export default function RealtyForm() {
  const dispatch = useDispatch();

  const { costOfRealEstate, initialPayment, loanTerm, interestRate } =
    useSelector((state) => state.mortgageCalculatorForm);

  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Стоимость недвижимости</div>
        <div className="form-item-input">
          <input
            type="text"
            name="costOfRealEstate"
            onChange={(evt) => {
              dispatch(changeCostOfRealEstateField(evt.target.value));
            }}
            value={costOfRealEstate}
          />
          <Slider
            defaultValue={500000}
            min={500000}
            max={99999999}
            onChange={(value) => {
              dispatch(changeCostOfRealEstateField(value));
            }}
            value={costOfRealEstate}
          />
          <div className="units">₽</div>
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
            max={costOfRealEstate * 0.3}
            onChange={(value) => {
              dispatch(changeInitialPaymentField(value));
            }}
            value={initialPayment}
          />
          <div className="units">₽</div>
        </div>
        <ChoosingInitialPayment />
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
            value={loanTerm}
          />
          <div className="units">₽</div>
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
            value={interestRate}
          />
          <div className="units">%</div>
        </div>
        <ChoosingInterestRate />
      </div>
    </>
  );
}
