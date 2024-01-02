import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../api/request";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
  }, [user]);

  const onChangeFunc = (event) => {
    const { target } = event;
    const { name, value } = target;

    setUser((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrorMessages((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const onClickFunc = async () => {
    const response = await getUserByEmail(user.email, user.password);

    if (response.status === 404) {
      setErrorMessages((prev) => ({
        ...prev,
        email: "Email não existente"
      }));

    } else if (response.status === 409) {
      setErrorMessages((prev) => ({
        ...prev,
        password: "Senha incorreta"
      }));

    } else {
      const fetch = await response.json();
      console.log(fetch);
      localStorage.setItem("dXNlcg", JSON.stringify(fetch.data));
    }
  };

  return (
    <main>
      <form>
        <div>
          <label htmlFor="inputEmail">Email</label>
          <input onChange={onChangeFunc} type="text" id="inputEmail" name="email" />
          {
            errorMessages.email && <span>{errorMessages.email}</span>
          }
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input onChange={onChangeFunc} type="password" id="inputPassword" name="password" />
          {
            errorMessages.password && <span>{errorMessages.password}</span>
          }
        </div>
        <div>
          <a onClick={onClickFunc} >Login</a>
          <a href="/register" >Register</a>
        </div>
      </form>
    </main>
  );
}
