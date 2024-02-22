import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../api/request";
import { useNavigate } from "react-router-dom";

// Style
import "../styles/pages/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    message: "",
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

  const onClickFunc = async (event) => {
    event.preventDefault();

    const response = await getUserByUsername(user.username, user.password);

    if (response.status === 404) {
      const fetch = await response.json();
      setErrorMessages((prev) => ({
        ...prev,
        message: fetch.message,
      }));
    } else {
      const fetch = await response.json();
      localStorage.setItem("dXNlcg", JSON.stringify(fetch.data));
      return navigate("/");
    }
  };

  return (
    <main className="m-login">
      <form className="m-login--form">
        <div className="m-login--logo">
          <img src="src/imgs/y-logo.png" alt="y" />
        </div>
        <div>
          <input
            onChange={onChangeFunc}
            type="text"
            id="inputUsername"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            onChange={onChangeFunc}
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="login-form--navegation">
          {errorMessages.message && <span>{errorMessages.message}</span>}
          <span>
            <button onClick={onClickFunc}>Login</button>
          </span>
          <span>
            {"Don't have an account? "} <a href="/register">Register</a>
          </span>
        </div>
      </form>
    </main>
  );
}
