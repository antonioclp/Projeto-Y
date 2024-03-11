import React from "react";
import PropTypes from "prop-types";

export default function UserCenter({ content }) {
  const {
    data: { username, email, createdDate },
  } = content;

  return (
    <div className="d-user">
      <article className="d-user--artc">
        <div className="artc__info">
          <span>{username}</span>
          <span>{email}</span>
          <span>{createdDate}</span>
        </div>
      </article>
      <div></div>
    </div>
  );
}

UserCenter.propTypes = {
  content: PropTypes.shape({
    data: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      createdDate: PropTypes.string,
    }),
  }),
};
