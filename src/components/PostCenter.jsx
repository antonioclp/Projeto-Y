import React, { useEffect, useState } from "react";

// Components
import { PostCard } from "./index";

// Api
import { uploadPost } from "../api/request";

// Style
import "../styles/components/PostCenter.css";

export default function PostCenter() {
  const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

  const [message, setMessage] = useState("");
  const [isDisable, setDisable] = useState(true);
  const [uploaded, isUploaded] = useState(false);

  useEffect(() => {
    /* const fetchData = async () => {
      const { token, username } = credentials;
      const infos = await getUserByUsername(username, token);
      
      setInformation(infos.data);
     };
     */
  }, []);

  const onChangeFunction = (event) => {
    const { target } = event;
    const { name, value } = target;

    switch (name) {
    case "post-input":
      if (value.length >= 2) {
        setMessage(value);
        setDisable(false);
      }
      break;
    default:
      break;
    }
  };

  const onClickFunction = async () => {
    const { username, token } = credentials;

    const data = await uploadPost(username, token, message);

    if (data.status === 201) {
      isUploaded(true);
      setTimeout(() => {
        isUploaded(false);
      }, 3000);

    } else {
      console.log(data);
    }
  };

  return (
    <div className="center__post">
      <article className="post-user">
        <div className="post-user--img">
          <img src="src/imgs/user-default.png" />
        </div>
        <div className="post-user--submit">
          <input
            onChange={onChangeFunction}
            type="text"
            name="post-input"
            placeholder="What are you thinking?"
          />
          {uploaded && <span>Sucess!</span>}
          <div className="submit__options">
            <button
              onClick={onClickFunction}
              type="button"
              name="post-button"
              disabled={isDisable}
            >
              Post
            </button>
          </div>
        </div>
      </article>
      <div className="post-others">
        <PostCard />
      </div>
    </div>
  );
}
