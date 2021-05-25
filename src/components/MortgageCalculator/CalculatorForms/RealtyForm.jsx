import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCostOfRealEstateField,
  changeInitialPaymentField,
  changeLoanTermField,
  changeInterestRateField,
} from "../../../redux/mortgageCalculator/form/actions/actionsCreators";

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
        <div className="input-buttons">
          <div className="input-buttons-item">0%</div>
          <div className="input-buttons-item">10%</div>
          <div className="input-buttons-item">15%</div>
          <div className="input-buttons-item">20%</div>
          <div className="input-buttons-item">25%</div>
          <div className="input-buttons-item">30%</div>
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
        <div className="input-buttons">
          <div className="input-buttons-item">5 лет</div>
          <div className="input-buttons-item">10 лет</div>
          <div className="input-buttons-item">15 лет</div>
          <div className="input-buttons-item">20 лет</div>
        </div>
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
        <div className="input-buttons">
          <div className="input-buttons-item">4,5%</div>
          <div className="input-buttons-item">6%</div>
          <div className="input-buttons-item">7,5%</div>
          <div className="input-buttons-item">9,1%</div>
          <div className="input-buttons-item">10%</div>
        </div>
      </div>
    </>
  );
}
