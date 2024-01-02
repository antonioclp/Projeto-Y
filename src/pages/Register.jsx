import React, { useEffect, useState } from "react";

// Utils
import getDate from "../utils/getDate";

// Api
import { postUser } from "../api/request";

export default function Register() {
  const [date, setDate] = useState();
  const [userInfo, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    birthday: "",
  });

  useEffect(() => {
    setDate(getDate);
  }, [userInfo]);

  const onChangeFunc = (event) => {
    const { target } = event;
    const { name, value } = target;

    if (name === "birthDay") {
      setInfo((prev) => ({
        ...prev,
        birthday: value,
        age: Number(date.slice(0, 4)) - Number(value.slice(0, 4))
      }));
    }

    setInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onClickFunc = () => {
    postUser(userInfo);
  };

  return (
    <main>
      <form>
        <div>
          <label htmlFor="inputName">Username</label>
          <input onChange={onChangeFunc} type="text" id="inputName" name="name" />
        </div>
        <div>
          <label htmlFor="inputEmail">Email</label>
          <input onChange={onChangeFunc} type="text" id="inputEmail" name="email" />
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input onChange={onChangeFunc} type="password" id="inputPassword" name="password" />
        </div>
        <div>
          <label htmlFor="inputDate">Birthday</label>
          <input onChange={onChangeFunc} type="date" id="inputDate" min="1925-01-01" max={date} name="birthDay" />
        </div>
        <div>
          <button onClick={onClickFunc} >Confirm</button>
        </div>
      </form>
    </main>
  );
}