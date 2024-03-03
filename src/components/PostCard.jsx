import React from "react";
import PropTypes from "prop-types";

// Style
import "../styles/components/PostCard.css";
import moment from "moment";

export default function PostCard({
  username,
  message,
  createdDate,
  createdTime,
}) {
  const postDateTime = moment(
    `${createdDate} ${createdTime}`,
    "YYYY-MM-DD HH:mm:ss"
  );
  const currentDateTime = moment();
  const minutesElapsed = currentDateTime.diff(postDateTime, "minutes");

  return (
    <article className="post-card">
      <div className="post-card--info">
        <div className="info__name-post">
          <img src="src/imgs/user-default.png" />
          <span>
            <a href={`/y/users/${username}`}>{username}</a>
          </span>
          <span>
            <a href={`/y/users/${username}`}>@{username}</a>
          </span>
        </div>
        <div className="info__message">
          <span>{message}</span>
        </div>
      </div>
      <div className="post-card--others">
        <span>
          {minutesElapsed <= 60
            ? `${minutesElapsed} minutes`
            : `${Math.floor(minutesElapsed / 60)} hours`}
        </span>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string,
  createdDate: PropTypes.string,
  createdTime: PropTypes.string,
};
