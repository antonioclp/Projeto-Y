import React from "react";

// Style
import "../styles/components/isLogged.css";

export default function IsLogged() {
  return (
    <div className="m-home--isLogged">
      <h2>Log in to access Y</h2>
      <div className="m-home--isLogged-nav">
        <span>
          <a href="/login">Login</a>
        </span>
        <span>Or</span>
        <span>
          <a href="/register">Sing up</a>
        </span>
      </div>
    </div>
  );
}