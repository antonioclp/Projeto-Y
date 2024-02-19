import React, { useEffect, useState } from "react";

// Utils
import getDate from "../utils/getDate";
import { validateEmail, validatePassword } from "../utils/validation";

// Api
import { postUser } from "../api/request";

// Style
import "../styles/pages/Register.css";

export default function Register() {
  const [date, setDate] = useState();
  const [userInfo, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    birthday: "",
    role: "USER",
  });

  const [serverStatus, setStatus] = useState(0);
  const [errorMessages, setErrorMessages] = useState();

  useEffect(() => {
    setDate(getDate);
  }, [userInfo]);

  const onChangeFunc = (event) => {
    const { target } = event;
    const { name, value } = target;
    let errorMessage = "";

    if (name === "birthday") {
      setInfo((prev) => ({
        ...prev,
        birthday: value,
        age: Number(date.slice(0, 4)) - Number(value.slice(0, 4)),
      }));
    } else {
      setInfo((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (value.trim().length < 2) {
        errorMessage = "Mínimo de 2 caracteres";
      } else {
        if (name === "email" && !validateEmail(value)) {
          errorMessage = "Email inválido";
        }

        if (name === "password" && !validatePassword(value)) {
          errorMessage = "A senha deve conter pelo menos um caractere especial";
        }

        if (name === "birthday") {
          if (
            Number(value.slice(0, 4)) < 1925 ||
            Number(value.slice(0, 4)) > Number(date.slice(0, 4))
          ) {
            errorMessage = "Insira uma data válida.";
          }
        }
      }
    }

    setErrorMessages((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const onClickFunc = async () => {
    const response = await postUser(userInfo);

    if (response === 409) {
      return setStatus(409);
    } else {
      setStatus(200);
    }
  };

  return (
    <main className="m-register">
      <form className="m-register-form">
        <div className="m-register-form--title">
          <h2>Register</h2>
        </div>
        <div className="m-register-form--inputs">
          <div>
            <label htmlFor="inputName">Username</label>
            <input
              onChange={onChangeFunc}
              type="text"
              id="inputName"
              name="name"
            />
          </div>
          {errorMessages && <span>{errorMessages.name}</span>}
          <div>
            <label htmlFor="inputEmail">Email</label>
            <input
              onChange={onChangeFunc}
              type="text"
              id="inputEmail"
              name="email"
            />
          </div>
          {errorMessages && <span>{errorMessages.email}</span>}
          {serverStatus === 409 ? <span>Email já existe.</span> : null}
          <div>
            <label htmlFor="inputPassword">Password</label>
            <input
              onChange={onChangeFunc}
              type="password"
              id="inputPassword"
              name="password"
            />
          </div>
          {errorMessages && <span>{errorMessages.password}</span>}
          <div>
            <label htmlFor="inputDate">Birthday</label>
            <input
              onChange={onChangeFunc}
              type="date"
              id="inputDate"
              min="1925-01-01"
              max={date}
              name="birthday"
            />
          </div>
          {errorMessages && <span>{errorMessages.birthday}</span>}
          <div>
            <button onClick={onClickFunc} type="button">
              Continue
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
