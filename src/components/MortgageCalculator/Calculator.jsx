import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { realtyOn } from "../../redux/mortgageCalculator/menu/actions/actionsCreators";
import CalculatorMenu from "./CalculatorMenu/CalculatorMenu";
import RealtyForm from "./CalculatorForms/RealtyForm";
import CreditForm from "./CalculatorForms/CreditForm";
import PaymentForm from "./CalculatorForms/PaymentForm";
import { getMonthlyPayment } from "../../CalculationFunctions/getMonthlyPayment";
import { getCostOfRealEstate } from "../../CalculationFunctions/getCostOfRealEstate";
import RealtyInformation from "./Info/RealtyInformation";
import CreditInformation from "./Info/CreditInformation";
import PaymentInformation from "./Info/PaymentInformation";
import CalculatorChartRealty from "./CalculatorChart/CalculatorChartRealty";
import CalculatorChartCredit from "./CalculatorChart/CalculatorChartCredit";

export default function Calculator() {
  const { realty, credit, payment } = useSelector(
    (state) => state.mortgageCalculatorMenu
  );

  const {
    costOfRealEstate,
    initialPayment,
    loanTerm,
    loanAmount,
    interestRate,
    monthlyPayment,
  } = useSelector((state) => state.mortgageCalculatorForm);

  let formToSend = {
    costOfRealEstate: costOfRealEstate,
    initialPayment: initialPayment,
    loanTerm: loanTerm,
    loanAmount: loanAmount,
    interestRate: interestRate,
    monthlyPayment: monthlyPayment,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(realtyOn());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formToSend);
  };

  return (
    <>
      <div className="calculator">
        <div className="menu-and-form">
          <CalculatorMenu />
          <form onSubmit={handleSubmit}>
            <div className="form-and-info">
              {realty && (
                <div className="form">
                  <RealtyForm />
                </div>
              )}
              {credit && (
                <div className="form">
                  <CreditForm />
                </div>
              )}
              {payment && (
                <div className="form">
                  <PaymentForm />
                </div>
              )}
              <div className="info">
                {realty && (
                  <>
                    <div className="total">
                      <div className="total-name">
                        <p>Ваш ежемесячный платеж</p>
                      </div>
                      <div className="total-value">
                        <h2>
                          {`${getMonthlyPayment(
                            Number(costOfRealEstate) - Number(initialPayment),
                            Number(loanTerm),
                            Number(interestRate)
                          )} ₽`}
                        </h2>
                      </div>
                    </div>
                    <RealtyInformation />
                  </>
                )}
                {credit && (
                  <>
                    <div className="total">
                      <div className="total-name">
                        <p>Ваш ежемесячный платеж</p>
                      </div>
                      <div className="total-value">
                        <h2>
                          {getMonthlyPayment(
                            Number(loanAmount),
                            Number(loanTerm),
                            Number(interestRate)
                          )}
                          ₽
                        </h2>
                      </div>
                    </div>
                    <CreditInformation />
                  </>
                )}
                {payment && (
                  <>
                    <div className="total">
                      <div className="total-name">
                        <p>Стоимость недвижимости</p>
                      </div>
                      <div className="total-value">
                        <h2>{`${getCostOfRealEstate(
                          Number(monthlyPayment),
                          Number(loanTerm),
                          Number(interestRate),
                          Number(initialPayment)
                        )} ₽`}</h2>
                      </div>
                    </div>
                    <PaymentInformation />
                  </>
                )}
              </div>
            </div>
          </form>
          {realty && <CalculatorChartRealty />}
          {credit && <CalculatorChartCredit />}
        </div>
      </div>
    </>
  );
}
