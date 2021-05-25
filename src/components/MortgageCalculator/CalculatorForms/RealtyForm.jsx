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
