import getDate from "../utils/getDate";
import moment from "moment";

export const postUser = async (userInfo) => {
  const response = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userInfo.name,
      age: userInfo.age,
      email: userInfo.email,
      password: userInfo.password,
      createdDate: getDate(),
      createdTime: moment().format("HH:mm:ss"),
      role: userInfo.role,
    }),
  });

  if (response.status === 409) {
    return response.status;
  }

  const data = await response.json();
  return data;
};

export const getTokenByCredentials = async (username, password) => {
  const url = `http://localhost:8080/login`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return response;
};

export const getUserByUsername = async (username, token) => {
  const url = `http://localhost:8080/person/${username}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};
