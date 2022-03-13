///!Volunteer Posts Service -->

const BASIC_API =
  process.env.NODE_ENV === "production"
    ? "https://my-office-mern-app.herokuapp.com/"
    : "http://localhost:8000/";

export const getPostsData = async () => {
  try {
    return await fetch(`${BASIC_API}`).then((res) => res.json());
  } catch (er) {
    console.error(er);
  }
};
