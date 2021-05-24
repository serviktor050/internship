import React from "react";

export default function CreditForm() {
  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Сумма кредита</div>
        <div className="form-item-input">
          <input type="text" />
        </div>
      </div>
      <div className="form-item">
        <div className="form-item-name">Срок кредита</div>
        <div className="form-item-input">
          <input type="text" />
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
          <input type="text" />
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