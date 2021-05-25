import React from "react";
import { useSelector } from "react-redux";

export default function CreditInformation() {
  const { realty, credit, payment } = useSelector(
    (state) => state.mortgageCalculator
  );

  return (
    <>
      {/* {realty && <div>Информация о кредите Недвижимость</div>}
      {credit && <div>Информация о кредите Кредит</div>}
      {payment && <div>Информация о кредите Платеж</div>} */}
      <div className="info-value">
        <div className="info-value-item">
          <div className="item-name">Кредит</div>
          <div className="item-value"> ₽</div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Проценты</div>
          <div className="item-value"> ₽</div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Проценты + Кредит</div>
          <div className="item-value"> ₽</div>
        </div>
        <div className="info-value-item">
          <div className="item-name">Необходимый доход</div>
          <div className="item-value"> ₽</div>
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
