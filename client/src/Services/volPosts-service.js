///!Volunteer Posts Service -->
const BASIC_API =
  process.env.NODE_ENV === "production"
    ? "https://ivolunteer-app.herokuapp.com"
    : "http://localhost:8000";

export const GetPostsData = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    return await fetch(`${BASIC_API}/posts`, options).then((res) => res.json());
  } catch (er) {
    console.error(er);
  }
};

export const AddPost = async (post) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...post }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return await fetch(`${BASIC_API}/posts`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
