import React from "react";
import PropTypes from "prop-types";

export default function UserCenter({ content }) {

  return (
    <div className="d-user">
      <article className="d-user--artc">
        <div className="artc__info">
          <span>{content.data.username}</span>
          <span>{content.data.email}</span>
          <span>{content.data.createdDate}</span>
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
