import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { AsideLeft, AsideRight, UserCenter } from "../components";

// Api
import { getUserByUsername } from "../api/request";

export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

    if (credentials) {
      const { username, token } = credentials;

      setTimeout(async () => {
        const data = await getUserByUsername(username, token);
        console.log(data);
      }, 2000);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <main className="m-profile">
      <div className="m-profile--center">
        <AsideLeft />
        <UserCenter />
        <AsideRight />
      </div>
    </main>
  );
}
