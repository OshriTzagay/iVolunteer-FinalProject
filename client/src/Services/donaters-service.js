const BASIC_API = process.env.NODE_ENV === 'production'? `https://ivolunteer-app.herokuapp.com/donates`:'http://localhost:8000/donates';


export const getDonatersData = async () => {
    try {
      return await fetch(`${BASIC_API}`).then((res) => res.json());
    } catch (er) {
      console.error(er);
    }
  };
  
  export const AddDonater = async (donater) => {
    const options = {
      method: "POST",
      body: JSON.stringify({...donater}),
      headers: { "Content-Type": "application/json",
      Authorization:`Bearer ${localStorage.getItem('token')}` },
    };
    return await fetch(`${BASIC_API}`, options)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };