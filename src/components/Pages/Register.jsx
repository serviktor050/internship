import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { registerRequest } from "../../redux/registerPage/actions/actionsCreators";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  const onSubmit = (data) => {
    dispatch(registerRequest(data));
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {userToken !== null && userToken.token !== "" && <Redirect to="/" />}
      <div>
        Страница регистрации
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} type="text" onChange={handleChange} />
          <input
            {...register("password")}
            type="password"
            onChange={handleChange}
          />
          <button>Отправить</button>
        </form>
      </div>
    </>
  );
}
