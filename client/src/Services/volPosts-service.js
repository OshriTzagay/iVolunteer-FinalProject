///!Volunteer Posts Service -->

const basicApi = "http://localhost:8000/posts";

export const getPostsData = async () => {
  try {
    return await fetch(`${basicApi}`).then((res) => res.json());
  } catch (er) {
    console.error(er);
  }
};


