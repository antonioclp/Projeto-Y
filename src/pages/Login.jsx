import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../api/request";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [info, setInfo] = useState();

  useEffect(() => {
  }, [user]);

  const onChangeFunc = (event) => {
    const { target } = event;
    const { name, value } = target;

    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onClickFunc = async () => {
    const data = await getUserByEmail(user.email, user.password);

    setInfo(data);
  };

  return (
    <main>
      <form>
        <div>
          <label htmlFor="inputEmail">Email</label>
          <input onChange={onChangeFunc} type="text" id="inputEmail" name="email" />
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input onChange={onChangeFunc} type="password" id="inputPassword" name="password" />
        </div>
        <div>
          <a onClick={onClickFunc} href="/home" >Login</a>
          <a href="/register" >Register</a>
        </div>
      </form>
    </main>
  );
}