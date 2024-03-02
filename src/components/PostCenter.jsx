import React from "react";

// Components
import { PostCard } from "./index";

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
          <input type="text" placeholder="What are you thinking?" />
          <div className="submit__options">
            <button type="button">Post</button>
          </div>
        </div>
      </article>
      <div className="post-others">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
