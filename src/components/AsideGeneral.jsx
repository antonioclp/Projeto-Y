import React from "react";

// Style
import "../styles/components/AsideGeneral.css";

export default function AsideGeneral() {
  return (
    <aside className="center__aside-general">
      <span><a href="/y/4you">For You</a></span>
      <span><a href="/y/following">Following</a></span>
      <span><a href="/y/latest">Latest</a></span>
      <span><a href="/y/trendings">Top Trendings</a></span>
    </aside>
  );
}
