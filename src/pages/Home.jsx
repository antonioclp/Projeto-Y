import React, { useEffect, useState } from "react";

// Components
import { 
  IsLogged, CHeader, 
  AsideLeft, AsideRight, 
  PostCenter
} from "../components";

// Style
import "../styles/pages/Home.css";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

    if (credentials) {
      setIsLogged(true);
    }
  }, []);

  return (
    <main className="m-home">
      <div className={`${isLogged ? "" : "with-blur"}`}>
        <CHeader />
      </div>
      <div className={`m-home--center ${isLogged ? "" : "with-blur"}`}>
        <AsideLeft />
        <PostCenter />
        <AsideRight />
      </div>
      {!isLogged && <IsLogged />}
    </main>
  );
}
