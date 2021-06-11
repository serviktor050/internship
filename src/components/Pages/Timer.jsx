import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Timer() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  const [changeTime, setChangeTime] = useState("");
  const [timer, setTimer] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);

  let circle;
  let radius;
  let circumference;
  let offset;

  circle = document.querySelector(".progress-ring__circle");

  if (circle !== null) {
    radius = circle.r.baseVal.value;
    circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
  }

  const setProgress = (seconds) => {
    offset = circumference - (seconds / 60) * circumference;
    circle.style.strokeDashoffset = offset;
  };

  useEffect(() => {
    if (btnStatus) {
      setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
          setProgress(timer - 1);
        } else if (timer === 0) {
          setBtnStatus(false);
        }
      }, 1000);
    }
  }, [timer, btnStatus]);

  const handleChange = (evt) => {
    setChangeTime(Number(evt.target.value));
  };

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Таймер</h1>
      <div className="timer">
        <p>Установите время:</p>
        <div className="timer-input">
          <input
            type="text"
            onChange={handleChange}
            value={changeTime}
            placeholder="На сколько секунд?"
          />
          {timer === "" && (
            <button
              onClick={() => {
                setTimer(changeTime);
                setChangeTime("");
              }}
            >
              Установить
            </button>
          )}
          {timer === 0 && (
            <button
              onClick={() => {
                setTimer(changeTime);
                setChangeTime("");
              }}
            >
              Установить
            </button>
          )}

          {!btnStatus && timer !== "" && timer !== 0 && (
            <button onClick={() => setBtnStatus((prev) => !prev)}>Cтарт</button>
          )}
          {btnStatus && timer !== 0 && (
            <button onClick={() => setBtnStatus((prev) => !prev)}>Пауза</button>
          )}
        </div>
        {timer === 0 && timer !== "" && (
          <div className="timer-message">
            <p>Время вышло!</p>
          </div>
        )}
        <div className="timer-value-and-progress">
          {timer !== 0 && <div className="timer-value">{timer}</div>}
          <svg className="progress-ring" width="160" height="160">
            <circle
              className="progress-ring__circle"
              stroke="red"
              strokeWidth="12"
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
