import { useState } from "react";
import { AddPost } from "../../../Services/needVolPost-service";

export const AddNeedVolPost = () => {
  const [post, setPost] = useState({});

  const ChangingTheValue = (e) => {
    post[e.target.name] = e.target.value;
  };

  const SendThePost = (e) => {
    e.preventDefault();
    setPost({ ...post });
    console.log(post);
    AddPost(post);
  };

  return (
    <div>
      <h1>add need vol post</h1>
      <form>
        <label>First name </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="FirstName"
          placeholder="Enter your first name"
        />
        <label>Last name </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="LastName"
          placeholder="Enter your last name"
        />
        <label> Email </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Email"
          placeholder="Enter your Email"
        />
        <label> Language</label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Language"
          placeholder="Enter any Language you speak"
        />
        <label> Age </label>
        <input
          type="number"
          onChange={ChangingTheValue}
          name="Age"
          placeholder="Enter your Age"
        />
        <label> City </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="City"
          placeholder="Enter the city you want to volunteer in "
        />
        <label> Phone </label>
        <input
          type="tel"
          onChange={ChangingTheValue}
          name="Phone"
          placeholder="enter your phone number"
        />
        <label> Description </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Description"
          placeholder="write about yourself"
        />
        <button type="submit" onClick={SendThePost}>
          send
        </button>
        
      </form>
    </div>
  );
};
