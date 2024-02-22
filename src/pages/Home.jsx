import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../api/request";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [information, setInformation] = useState({});

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

    if (!credentials) {
      navigate("/login");
    }

    const fetchData = async () => {
      const { token, username } = credentials;
      const infos = await getUserByUsername(username, token);

      setInformation(infos.data);
    };
    fetchData();
  }, []);

  return (
    <main>Homepage</main>
  );
}
