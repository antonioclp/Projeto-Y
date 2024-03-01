import React from "react";

// Style
import "../styles/components/PostCenter.css";

export default function PostCenter() {
  return (
    <div className="center__post">
      <article className="post-user">
        <div className="post-user--img">
          <img src="src/imgs/user-default.png" />
        </div>
        <div className="post-user--submit">
          <input />
          <div className="submit__options">
            <button>Post</button>
          </div>
        </div>
      </article>
      <div className="post-others">
        <article></article>
      </div>
    </div>
  );
}
