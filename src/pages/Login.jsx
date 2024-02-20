import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../api/request";
import { useNavigate } from "react-router-dom";

// Style
import "../styles/pages/Login.css";

export default function Login() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [user]);

  const onChangeFunc = (event) => {
    const { target } = event;
    const { name, value } = target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessages((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const onClickFunc = async () => {
    const response = await getUserByEmail(user.email, user.password);

    if (response.status === 404) {
      setErrorMessages((prev) => ({
        ...prev,
        email: "Email não existente",
      }));
    } else if (response.status === 409) {
      setErrorMessages((prev) => ({
        ...prev,
        password: "Senha incorreta",
      }));
    } else {
      const fetch = await response.json();
      localStorage.setItem("dXNlcg", JSON.stringify(fetch.data));
      return navigate("/");
    }
  };

  return (
    <main className="m-login">
      <form method="submit" className="m-login--form">
        <div className="m-login--logo">
          <img src="src/imgs/y-logo.png" alt="y" />
        </div>
        <div>
          <input
            onChange={onChangeFunc}
            type="text"
            id="inputEmail"
            name="email"
            placeholder="Email"
          />
          {errorMessages.email && <span>{errorMessages.email}</span>}
        </div>
        <div>
          <input
            onChange={onChangeFunc}
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
          />
          {errorMessages.password && <span>{errorMessages.password}</span>}
        </div>
        <div className="login-form--navegation">
          <span>
            <button onClick={onClickFunc}>
              Login
            </button>
          </span>
          <span>{"Don't have an account? "} <a href="/register">Register</a></span>
        </div>
      </form>
    </main>
  );
}
