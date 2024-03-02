import React from "react";

// Style
import "../styles/components/PostCard.css";

export default function PostCard() {
  return (
    <article className="post-card">
      <div className="post-card--info">
        <img src="src/imgs/user-default.png" />
        <div className="info__name-post">
          <span>
            <a href="/y/users/${userId}">Elon Musk</a>
          </span>
          <span>
            <a href="/y/users/${userId}">@spacex</a>
          </span>
          <span>Im going to buy Y now sparum natum, calarum, tararum, darambun, bumdumoutiro, porium, babumdus</span>
        </div>
      </div>
      <div className="post-card--others">
        <span>Today</span>
      </div>
    </article>
  );
}
