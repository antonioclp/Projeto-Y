import React from "react";

export default function Login() {
  return (
    <main>
      <form>
        <div>
          <label htmlFor="inputEmail">Email</label>
          <input type="text" id="inputEmail" name="email" />
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" id="inputPassword" name="password" />
        </div>
        <div>
          <label></label>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}