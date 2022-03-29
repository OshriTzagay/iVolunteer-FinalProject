const BASIC_API =
  process.env.NODE_ENV === "production"
    ? "https://ivolunteer-app.herokuapp.com"
    : "http://localhost:8000";

export const getDonatersData = async () => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json",
    Authorization:`Bearer ${localStorage.getItem('token')}`},
  };
  try {
    return await fetch(`${BASIC_API}/donates`,options).then((res) => res.json());
  } catch (er) {
    console.error(er);
  }
};

export const AddDonater = async (donater) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...donater }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return await fetch(`${BASIC_API}/donates`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const DeleteDonater = async (donaterId) => {
  const options = {
    method: "DELETE",
    body: JSON.stringify({ ...donaterId }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return await fetch(`${BASIC_API}/donates/${donaterId}`,options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
