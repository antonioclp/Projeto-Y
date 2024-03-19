import React from "react";

// Style
import "../styles/components/AsideLeft.css";

export default function AsideLeft() {
  const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

  return (
    <aside className="center__aside-left">
      <div className="aside-left--div">
        <div className="div__options">
          <img src="/src/imgs/4you.png" />
          <span>
            <a href="/y/4you">For You</a>
          </span>
        </div>
        <div className="div__options">
          <img src="/src/imgs/following.png" />
          <span>
            <a href="/y/following">Following</a>
          </span>
        </div>
        <div className="div__options">
          <img src="/src/imgs/trends.png" />
          <span>
            <a href="/y/trendings">Trends</a>
          </span>
        </div>
        <div className="div__options">
          <img src="/src/imgs/user-default.png" />
          <span>
            <a href={`/y/${credentials ? credentials.username : " "}`}>Profile</a>
          </span>
        </div>
        <div className="div__options">
          <img src="/src/imgs/settings.png" />
          <span>
            <a href="/y/{userId}/settings">Settings</a>
          </span>
        </div>
      </div>
    </aside>
  );
}
