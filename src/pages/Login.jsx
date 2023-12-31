import React, { useEffect, useState } from "react";

// Utils
import { getDate } from "../utils/GetDate";

export default function Login() {
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(getDate);
  }, []);

  return (
    <main>
      <form>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="date" min="1925-01-01" max={date} />
        </div>
      </form>
    </main>
  );
}