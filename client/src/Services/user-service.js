const BASIC_API =
  process.env.NODE_ENV === "production"
    ? "https://ivolunteer-app.herokuapp.com/users"
    : "http://localhost:8000/users";

export const registerUser = async (user) => {
  console.log(user);
  const options = {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { "Content-Type": "application/json" },
  };
  return await fetch(`${BASIC_API}/register`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const loginUser = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { "Content-Type": "application/json" },
  };
  return await fetch(`${BASIC_API}/login`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
