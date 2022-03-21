import { AddPost } from "../../../Services/volPosts-service";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Add-style.css";

export  const AddVolPost = () => {
  const [post, setPost] = useState({});

  const [city,setCity]=useState("Haifa");

 const ChangingSelectorValue=(e)=>{
    setCity(e.target.value)
  }


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
          <TextField label="Last name" placeholder="Enter your Last name" name="LastName" type="text" onChange={ChangingTheValue} multiline required /><br/>
          <TextField label="Email" placeholder="Enter your Email" name="Email" type="text" onChange={ChangingTheValue} multiline required />
          <TextField label="Age" placeholder="Enter your Age" name="Age" type="number" onChange={ChangingTheValue} multiline /><br/>
          <TextField label="Skills" placeholder="Enter any spacial skills" name="Skills" type="text" onChange={ChangingTheValue} multiline />
          <TextField label="Language" placeholder="Enter your Language" name="Language" type="text" onChange={ChangingTheValue} multiline /><br/>
          <TextField label="StartHour" placeholder="example: 1500" name="StartHour" type="number" onChange={ChangingTheValue} multiline /><br/>
          <TextField label="FinishHour" placeholder="example: 1900 " name="FinishHour" type="number" onChange={ChangingTheValue} multiline />
          <TextField label="Phone" placeholder="enter a phone number" name="Phone" type="tel" onChange={ChangingTheValue} multiline /><br/>
        <TextField label="Description" placeholder="write about yourself and your Skills" name="Description" type="text" onChange={ChangingTheValue} multiline /><br/> 
       <input label="ProfilePic" placeholder="add image" name="ProfilePic" type="file" onChange={ChangingTheValue} multiline />
         <InputLabel >City</InputLabel>
         
  <select
  style={{width:"120px",height:"70px",fontSize:"1rem",background:"none",textAlign:"center"}}
    name="City"
    onChange={ChangingTheValue}
  >
    <option value="Haifa">Haifa</option>
    <option value="Tel Aviv">Tel-Aviv</option>
    <option value={"Jerusalem"}>Jerusalem</option>
    <option value={"Beer Sheva"}>Beer Sheva</option>
    <option value={"Eilat"}>Eilat</option>
    <option value={"Kiryat Shmona"}>Kiryat Shmona</option>
    <option value={"Beer Sheva"}>Beer Sheva</option>
  </select>

</div>
        <Button type="submit" >click</Button>
      </form>
    </div>
  );
};
