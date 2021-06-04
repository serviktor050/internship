import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDataForRealtyChart } from "../../../CalculationFunctions/getDataForRealtyChart";
import { getMonthlyPayment } from "../../../CalculationFunctions/getMonthlyPayment";

import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";

export default function CalculatorChartRealty() {
  const { costOfRealEstate, initialPayment, loanTerm, interestRate } =
    useSelector((state) => state.mortgageCalculatorForm);

  const [count, setCount] = useState([
    {
      month: 0,
      percentPart: 0,
      remainingDebt: 0,
    },
  ]);

  useEffect(() => {
    let setMonthlyPayment = getMonthlyPayment(
      Number(costOfRealEstate) - Number(initialPayment),
      Number(loanTerm),
      Number(interestRate)
    );
    getDataForRealtyChart(
      Number(costOfRealEstate) - Number(initialPayment),
      Number(setMonthlyPayment),
      Number(interestRate),
      Number(loanTerm)
    );
    setCount(
      getDataForRealtyChart(
        Number(costOfRealEstate) - Number(initialPayment),
        Number(setMonthlyPayment),
        Number(interestRate),
        Number(loanTerm)
      )
    );
  }, [costOfRealEstate, initialPayment, interestRate, loanTerm]);

  return (
    <div className="calculator-chart">
      <div className="calculator-chart-name">
        <h2>График "Недвижимость"</h2>
      </div>
      <div className="calculator-chart-description">
        <p>
          На данном графике предвталено визуально отображение основных
          составляющих кредита, где:
        </p>
        <ul>
          <li>синий - оставшийся долг;</li>
          <li>красный - процентная часть;</li>
          <li>зеленый - величина ежемесячного платежа.</li>
        </ul>
      </div>
      <div className="calculator-chart-field">
        <LineChart width={800} height={300} data={count}>
          <XAxis dataKey="month" />
          <YAxis dataKey="remainingDebt" />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="percentPart" stroke="red" />
          <Line type="monotone" dataKey="remainingDebt" stroke="blue" />
          <Line type="monotone" dataKey="payment" stroke="green" />
          payment
        </LineChart>
      </div>
    </div>
  );
}
