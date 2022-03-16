import { AddPost } from "../../../Services/volPosts-service";
import { useState } from "react";

export const AddVolPost = () => {
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
      <h1>add post</h1>
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
        <label> Age </label>
        <input
          type="number"
          onChange={ChangingTheValue}
          name="Age"
          placeholder="Enter your Age"
        />
        <label> Skills </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Skills"
          placeholder="Enter any spacial skills"
        />
        <label> Language</label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Language"
          placeholder="Enter any Language you speak"
        />
        <label> Skills </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Skills"
          placeholder="Enter any spacial skills"
        />
        <label> City </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="City"
          placeholder="Enter the city you want to volunteer in "
        />
        <label> StartHour </label>
        <input
          type="time"
          onChange={ChangingTheValue}
          name="StartHour"
          placeholder="Enter the hour you can start in "
        />
        <label> FinishHour </label>
        <input
          type="time"
          onChange={ChangingTheValue}
          name="FinishHour"
          placeholder="Enter the hour you want finish volunteer in "
        />
        <label> Description </label>
        <input
          type="text"
          onChange={ChangingTheValue}
          name="Description"
          placeholder="write about yourself"
        />
        <label> Phone </label>
        <input
          type="tel"
          onChange={ChangingTheValue}
          name="Phone"
          placeholder="enter your phone number"
        />

        <button type="submit" onClick={SendThePost}>
          click
        </button>
      </form>
    </div>
  );
};
