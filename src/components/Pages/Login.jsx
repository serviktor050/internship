import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginRequest } from "../../redux/loginPage/actions/actionsCreators";

export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });
  const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(form));
  };

  return (
    <>
      {userToken !== null && userToken.token !== "" && <Redirect to="/" />}
      <div>
        <h1>Страница авторизации</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <button>Войти</button>
        </form>
      </div>
    </>
  );
}
