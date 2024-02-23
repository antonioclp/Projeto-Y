import React from "react";
import PropTypes from "prop-types";

export default function IsLogged({ onClickFunction }) {
  return (
    <div className="m-home--isLogged">
      <h4>Log in to access Y</h4>
      <div className="m-home--isLogged-buttons">
        <button type="button" name="login" onClick={onClickFunction}>
          Login
        </button>
        <button type="button" name="sing up" onClick={onClickFunction}>
          Sing up
        </button>
      </div>
    </div>
  );
}

IsLogged.propTypes = {
  onClickFunction: PropTypes.func
};