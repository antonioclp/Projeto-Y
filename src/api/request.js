export const getUserByEmail = async (userEmail, userPassword) => {
  const url = `http://localhost:8080/users/email?email=${encodeURIComponent(userEmail)}&password=${encodeURIComponent(userPassword)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};
