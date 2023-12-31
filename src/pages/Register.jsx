import React, { useEffect, useState } from "react";

// Utils
import getDate from "../utils/GetDate";

export default function Register() {
  const [date, setDate] = useState();
  const [userInfo, setInfo] = useState();

  useEffect(() => {
    setDate(getDate);
  }, []);

  return (
    <main>
      <form>
        <div>
          <label htmlFor="inputName">Username</label>
          <input type="text" id="inputName" name="name" />
        </div>
        <div>
          <label htmlFor="inputEmail">Email</label>
          <input type="text" id="inputEmail" name="email" />
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" id="inputPassword" name="password" />
        </div>
        <div>
          <label htmlFor="inputDate">Birthday</label>
          <input type="date" id="inputDate" min="1925-01-01" max={date} name="birthDate" />
        </div>
        <div>
          <label></label>
          <button>Confirm</button>
        </div>
      </form>
    </main>
  );
}