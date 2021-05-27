import React from "react";
import { useSelector } from "react-redux";
import { getCostOfRealEstate } from "../../../CalculationFunctions/getCostOfRealEstate";
import { getPercentages } from "../../../CalculationFunctions/getPercentages";

export default function PaymentInformation() {
  const { monthlyPayment, initialPayment, loanTerm, interestRate } =
    useSelector((state) => state.mortgageCalculatorForm);

  let setCostOfRealEstate = getCostOfRealEstate(
    Number(monthlyPayment),
    Number(loanTerm),
    Number(interestRate),
    Number(initialPayment)
  );

  const koeff = 1.667;

  let requiredIncome = Number((monthlyPayment * koeff).toFixed());

  return (
    <>
      <div className="info-value">
        <div className="info-value-item">
          <div className="item-name">Кредит</div>
          <div className="item-value">{`${Number(setCostOfRealEstate)} ₽`}</div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Проценты</div>
          <div className="item-value">
            {`${getPercentages(
              Number(setCostOfRealEstate),
              monthlyPayment,
              interestRate,
              loanTerm
            )} ₽`}
          </div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Проценты + Кредит</div>
          <div className="item-value">
            {`${
              Number(setCostOfRealEstate) +
              getPercentages(
                Number(setCostOfRealEstate),
                monthlyPayment,
                interestRate,
                loanTerm
              )
            } ₽`}
          </div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Необходимый доход</div>
          <div className="item-value">{`${requiredIncome} ₽`}</div>
        </div>
      </div>
      <div className="submit-form">
        <input
          className="submit-form-button"
          type="submit"
          value="Подать заявку онлайн"
        />
      </div>
    </>
  );
}
