import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Timer() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  const [changeTime, setChangeTime] = useState("");
  const [timer, setTimer] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);

  useEffect(() => {
    if (btnStatus) {
      setTimeout(() => {
        if (timer > 0) {
          return setTimer(timer - 1);
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
      <p>Установите время:</p>
      <input type="text" onChange={handleChange} value={changeTime} />
      <button
        onClick={() => {
          setTimer(changeTime);
          setChangeTime("");
        }}
      >
        Установить
      </button>
      {timer !== 0 && <div>{timer}</div>}
      {timer === 0 && <div>Время вышло!</div>}
      {!btnStatus && timer !== "" && (
        <button onClick={() => setBtnStatus((prev) => !prev)}>Cтарт</button>
      )}
      {btnStatus && (
        <button onClick={() => setBtnStatus((prev) => !prev)}>Пауза</button>
      )}
    </>
  );
}
