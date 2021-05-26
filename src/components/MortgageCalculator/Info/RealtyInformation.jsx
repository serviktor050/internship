import React from "react";
import { useSelector } from "react-redux";
import { getMonthlyPayment } from "../../../CalculationFunctions/getMonthlyPayment";
import { getPercentages } from "../../../CalculationFunctions/getPercentages";

export default function RealtyInformation() {
  const { costOfRealEstate, initialPayment, loanTerm, interestRate } =
    useSelector((state) => state.mortgageCalculatorForm);

  let setMonthlyPayment = getMonthlyPayment(
    Number(costOfRealEstate) - Number(initialPayment),
    Number(loanTerm),
    Number(interestRate)
  );

  const koeff = 1.667;

  let requiredIncome = Number((setMonthlyPayment * koeff).toFixed());

  return (
    <>
      <div className="info-value">
        <div className="info-value-item">
          <div className="item-name">Кредит</div>
          <div className="item-value">
            {`${Number(costOfRealEstate) - Number(initialPayment)} ₽`}
          </div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Проценты</div>
          <div className="item-value">
            {`${getPercentages(
              Number(costOfRealEstate) - Number(initialPayment),
              setMonthlyPayment,
              interestRate,
              loanTerm
            )} ₽`}
          </div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Проценты + Кредит</div>
          <div className="item-value">
            {`${
              Number(costOfRealEstate) -
              Number(initialPayment) +
              getPercentages(
                Number(costOfRealEstate) - Number(initialPayment),
                setMonthlyPayment,
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
