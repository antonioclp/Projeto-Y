import getDate from "../utils/getDate";

export const postUser = async (userInfo) => {
  const response = await fetch("http://localhost/8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userInfo.name,
      age: userInfo.age,
      email: userInfo.email,
      password: userInfo.password,
      creationDate: getDate(),
      creationTime: new Date().toLocaleTimeString(),
    }),
  });

  const data = await response.json();
  return data;
};

export const getUserByEmail = async (userEmail, userPassword) => {
  const url = `http://localhost:8080/users/email?email=${encodeURIComponent(userEmail)}&password=${encodeURIComponent(userPassword)}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
