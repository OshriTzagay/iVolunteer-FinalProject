import { AddPost } from "../../../Services/volPosts-service";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import "./Add-style.css";

import Welcome from "../../pages/Welcome-Comp/Welcome";

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
  {
    if (!localStorage.token) {
      return <Welcome />;
    }
  }

  return (
    <div className="add-container">
      <div className="add-title">
        <h1 className="title">Want</h1>
        <h1 className="title">To</h1>
        <h1 className="title">Volunteer..?</h1>

        
        {/* <div><h2 style={{color:'white'}}>Add your own post...</h2></div> */}
        
      </div>


      <form className="add-form" onSubmit={SendThePost}>
        <div className="divA">
          {" "}
          <TextField
            label=" First name"
            placeholder="Enter your first name"
            name="FirstName"
            type="text"
            onChange={ChangingTheValue}
            multiline
            required
          />
          <TextField
            label="Last name"
            placeholder="Enter your Last name"
            name="LastName"
            type="text"
            onChange={ChangingTheValue}
            multiline
            required
          />
          <TextField 
          className="inputs"
            label="Email"
            placeholder="Enter your Email"
            name="Email"
            type="text"
            onChange={ChangingTheValue}
            multiline
            required
          />
          <TextField
            label="Age"
            placeholder="Enter your Age"
            name="Age"
            type="number"
            onChange={ChangingTheValue}
            multiline
          />
          <TextField
            label="Skills"
            placeholder="Enter any spacial skills"
            name="Skills"
            type="text"
            onChange={ChangingTheValue}
            multiline
          />
       
        </div>

        <div className="divB">
          <TextField
            label="StartHour"
            placeholder="example: 1500"
            name="StartHour"
            type="number"
            onChange={ChangingTheValue}
            multiline
          />
          <TextField
            label="FinishHour"
            placeholder="example: 1900 "
            name="FinishHour"
            type="number"
            onChange={ChangingTheValue}
            multiline
          />
          <TextField
            label="Phone"
            placeholder="enter a phone number"
            name="Phone"
            type="tel"
            onChange={ChangingTheValue}
            multiline
          />
          <TextField
            label="ProfilePic"
            placeholder="add image url"
            name="ProfilePic"
            type="text"
            onChange={ChangingTheValue}
            multiline
          />

          <select
            style={{
              width: "207px",
              height: "60px",
              fontSize: "1rem",
              background: "none",
              textAlign: "center",
            }}
            name="City"
            onChange={ChangingTheValue}
          >
            <option value={"Haifa"}>Haifa</option>
            <option value={"Tel Aviv"}>Tel-Aviv</option>
            <option value={"Jerusalem"}>Jerusalem</option>
            <option value={"Beer Sheva"}>Beer Sheva</option>
            <option value={"Eilat"}>Eilat</option>
            <option value={"Kiryat Shmona"}>Kiryat Shmona</option>
            <option value={"Beer Sheva"}>Beer Sheva</option>
          </select>
          <br />

        </div>
          <div className="btn-div">
          <TextField
            label="Language"
            placeholder="Enter your Language"
            name="Language"
            type="text"
            onChange={ChangingTheValue}
            multiline
          />
          <TextField
            label="Description"
            placeholder="write about yourself and your Skills"
            name="Description"
            type="text"
            onChange={ChangingTheValue}
            multiline
          />

            <Button type="submit" className="the-btn">Send</Button>
      <div className="add-vol-picDiv">
      </div>

          </div>

      </form>
      <div className="spaceDiv"></div>
    </div>
  );
};
