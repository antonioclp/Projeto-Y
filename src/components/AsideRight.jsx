import React from "react";

// Style
import "../styles/components/AsideRight.css";

export default function AsideRight() {
  return (
    <aside className="center__aside-right">
      <article className="aside-right--latest">
        <h3>Latest</h3>
        <div className="latest__top3">
          <span>Top 1 110k</span>
          <span>Top 2 50k</span>
          <span>Top 3 50k</span>
        </div>
      </article>
      <div className="aside-right--div__recom">
        <h3>Recomendations</h3>
        <article className="recom__user">
          <img src="src/imgs/user-default.png" />
          <div className="recom-info">
            <span><a href="/y/users/${userId}">Test</a></span>
            <span>@adm2101v1</span>
          </div>
        </article>
        <article className="recom__user">
          <img src="src/imgs/user-default.png" />
          <div className="recom-info">
            <span><a href="/y/users/${userId}">User</a></span>
            <span>@adm2912v2</span>
          </div>
        </article>
        <article className="recom__user">
          <img src="src/imgs/user-default.png" />
          <div className="recom-info">
            <span><a href="/y/users/${userId}">Administrator</a></span>
            <span>@adm1240v3</span>
          </div>
        </article>
      </div>
    </aside>
  );
}
