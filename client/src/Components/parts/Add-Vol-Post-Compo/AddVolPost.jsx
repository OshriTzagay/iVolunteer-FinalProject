import { AddPost } from "../../../Services/volPosts-service";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Add-style.css";

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
      <h1>Add post</h1>

      <form className="form" onSubmit={SendThePost}>
        <div className="inputs">
          <TextField label=" First name" placeholder="Enter your first name" name="FirstName" type="text" onChange={ChangingTheValue} multiline required />
          <TextField label="Last name" placeholder="Enter your Last name" name="LastName" type="text" onChange={ChangingTheValue} multiline required />
        </div>

        <div className="inputs">
          <TextField label="Email" placeholder="Enter your Email" name="Email" type="text" onChange={ChangingTheValue} multiline required   />
          <TextField label="Age" placeholder="Enter your Age" name="Age" type="number" onChange={ChangingTheValue} multiline />
        </div>

        <div>
          <TextField label="Skills" placeholder="Enter any spacial skills" name="Skills" type="text" onChange={ChangingTheValue} multiline />
          <TextField label="Language" placeholder="Enter your Language" name="Language" type="text" onChange={ChangingTheValue} multiline />
        </div>

        <div>
          <TextField label="City" placeholder="Enter your city" name="City" type="text" onChange={ChangingTheValue} multiline />
          <TextField label="StartHour" placeholder="example: 1500" name="StartHour" type="number" onChange={ChangingTheValue} multiline />
        </div>

        <div>
          <TextField label="FinishHour" placeholder="example: 1900 " name="FinishHour" type="number" onChange={ChangingTheValue} multiline />
          <TextField label="Phone" placeholder="enter a phone number" name="Phone" type="tel" onChange={ChangingTheValue} multiline />
        </div>

        <TextField label="Description" placeholder="write about yourself and your Skills" name="Description" type="text" onChange={ChangingTheValue} multiline />

        {/* <Button variant="contained" component="span" type="submit">Send</Button> */}
        <button type="submit" >click</button>
      </form>
    </div>
  );
};
