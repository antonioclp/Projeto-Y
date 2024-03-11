import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { AsideLeft, AsideRight, UserCenter } from "../components";

// Style
import "../styles/pages/Profile.css";

// Api
import { getUserByUsername } from "../api/request";

export default function Profile() {
  const navigate = useNavigate();

  const [content, setContent] = useState({});

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

    if (credentials) {
      const { username, token } = credentials;
      
      const fetchApi = async () => {
        const data = await getUserByUsername(username, token);
        setContent(data);
      };
      fetchApi();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <main className="m-profile">
      <div className="m-profile--center">
        <AsideLeft />
        {content !== null && <UserCenter content={content} />}
        <AsideRight />
      </div>
    </main>
  );
}
