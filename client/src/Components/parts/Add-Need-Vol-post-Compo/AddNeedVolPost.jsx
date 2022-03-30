import "./Add-Need-post-Style.css"
import { useState } from "react";
import { AddPost } from "../../../Services/needVolPost-service";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Welcome from "../../pages/Welcome-Comp/Welcome";


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
  {
    if (!localStorage.token) {
      return <Welcome />;
    }
  }
  
  return (
    <div className="add-container">
      <div className="intro">
        <video src="Media/bg_video_Volunteer.mp4" type="video/mp4" autoPlay loop muted></video>
      </div>
      <form className="add-needvol-form" onSubmit={SendThePost}>
      <div className="add-title">
        <h1 className="the-title">Land a Hand</h1>
      </div>
        <div className="A-input-group">

        <TextField
          label=" First name"
          placeholder="Enter your first name"
          name="FirstName"
          type="text"
          onChange={ChangingTheValue}
          multiline
          required
        />
        <br />
        <TextField
          label="Last name"
          placeholder="Enter your Last name"
          name="LastName"
          type="text"
          onChange={ChangingTheValue}
          multiline
          required
        />
        <br />
        <TextField
          label="Email"
          placeholder="Enter your Email"
          name="Email"
          type="text"
          onChange={ChangingTheValue}
          multiline
          required
        />
        <br />
        <TextField
          label="Language"
          placeholder="Enter your Language"
          name="Language"
          type="text"
          onChange={ChangingTheValue}
          multiline
        />
        </div>
        <br />
        <div className="B-input-group">

           <TextField
          label="Age"
          placeholder="Enter your Age"
          name="Age"
          type="number"
          onChange={ChangingTheValue}
          multiline
        />
        <br />
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
        <TextField
          label="Phone"
          placeholder="enter a phone number"
          name="Phone"
          type="tel"
          onChange={ChangingTheValue}
          multiline
        />
        <br />
        <TextField
          label="Image for post"
          placeholder="enter image url  "
          name="ProfilePic"
          type="text"
          onChange={ChangingTheValue}
          multiline
        />
        <br />
        </div>
       <div className="C-input-group">
        <TextField
          label="Description"
          placeholder="write about yourself and your Skills"
          name="Description"
          type="text"
          onChange={ChangingTheValue}
          multiline
        />
        <br /><br /><br />
        <Button type="submit" className="send-btn">click</Button>
       </div>
      </form>
      <div className="space-div"></div>
    </div>
  );
};
