import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Timer() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  const [changeTime, setChangeTime] = useState("");
  const [timer, setTimer] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);

  const setProgress = (seconds) => {
    const offset = circumference - (seconds / 60) * circumference;
    circle.style.strokeDashoffset = offset;
  };

  useEffect(() => {
    if (btnStatus) {
      setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
          setProgress(timer);
        }
      }, 1000);
    }
  }, [timer, btnStatus]);

  const handleChange = (evt) => {
    setChangeTime(evt.target.value);
  };

  let circle;
  let radius;
  let circumference;

  if (timer !== "" && timer !== 0) {
    circle = document.querySelector(".progress-ring__circle");
    radius = circle.r.baseVal.value;
    circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
  }

  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Таймер</h1>
      <p>Установите время:</p>
      <input type="number" onChange={handleChange} value={changeTime} />
      <button
        onClick={() => {
          setTimer(changeTime);
          setChangeTime("");
        }}
      >
        Установить
      </button>
      {!btnStatus && timer !== 0 && timer !== null && (
        <>
          <div>{timer}</div>
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
            <text> Start </text>
          </svg>
        </>
      )}
      {timer === 0 && <div>Время вышло!</div>}
      {!btnStatus && timer !== "" && timer !== 0 && (
        <button onClick={() => setBtnStatus((prev) => !prev)}>Cтарт</button>
      )}
      {btnStatus && (
        <button onClick={() => setBtnStatus((prev) => !prev)}>Пауза</button>
      )}
    </>
  );
}
