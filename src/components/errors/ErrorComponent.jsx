import React from "react";
import PropTypes from "prop-types";

export default function ErrorComponent({ message, status }) {
  return (
    <main>
      <div>
        <h2>{status}</h2>
      </div>
      <div>
        <h3>{message}</h3>
      </div>
    </main>
  );
}

ErrorComponent.propTypes = {
  message: PropTypes.string,
  status: PropTypes.number
};

