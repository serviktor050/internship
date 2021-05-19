import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  return (
    <>
      {userToken === null && (
        <p>
          Пройдите регистрацию. Если Вы зарегестрированный пользователь -
          авторизуйтесь!
        </p>
      )}
      {userToken !== null && userToken.token !== "" && (
        <p>Авторизация выполнена!</p>
      )}
    </>
  );
}
