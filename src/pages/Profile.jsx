import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { AsideLeft, AsideRight, CHeader, UserCenter } from "../components";

// Style
import "../styles/pages/Profile.css";

// Api
import { getUserByUsername } from "../api/request";

export default function Profile() {
  const navigate = useNavigate();

  const [content, setContent] = useState();
  const [isFecthed, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

      if (credentials) {
        const { username, token } = credentials;

        try {
          const data = await getUserByUsername(username, token);
          setContent(data);
          setIsFetched(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login");
      }
    };

    fetchUserData();
  }, []);

  return (
    <main className="m-profile">
      <div>
        <CHeader />
      </div>
      <div className="m-profile--center">
        <AsideLeft />
        {isFecthed && <UserCenter content={content} />}
        <div>
        </div>
        <AsideRight />
      </div>
    </main>
  );
}
