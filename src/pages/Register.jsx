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
        errorMessage = "Min 2 characters";
      } else {
        if (name === "email" && !validateEmail(value)) {
          errorMessage = "Invalid Email";
        }

        if (name === "password" && !validatePassword(value)) {
          errorMessage = "Password must contain at least one especial character";
        }

        if (name === "birthday") {
          if (
            Number(value.slice(0, 4)) < 1925 ||
            Number(value.slice(0, 4)) > Number(date.slice(0, 4))
          ) {
            errorMessage = "Insert a valid date.";
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
            <input
              onChange={onChangeFunc}
              type="text"
              id="inputName"
              name="name"
              placeholder="Username"
            />
          </div>
          {errorMessages && <span>{errorMessages.name}</span>}
          <div>
            <input
              onChange={onChangeFunc}
              type="text"
              id="inputEmail"
              name="email"
              placeholder="Email"
            />
          </div>
          {errorMessages && <span>{errorMessages.email}</span>}
          {serverStatus === 409 ? <span>Email already exists.</span> : null}
          <div>
            <input
              onChange={onChangeFunc}
              type="password"
              id="inputPassword"
              name="password"
              placeholder="Password"
            />
          </div>
          {errorMessages && <span>{errorMessages.password}</span>}
          <div>
            <span>Birthday</span>
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
          <div className="m-register-form--button">
            <button onClick={onClickFunc} type="button">
              Continue
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
