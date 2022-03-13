import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { getPostsData } from "./Services/volPosts-service";
import { UserRegister } from "./Components/parts/Register-Compo/User-Register";
function App() {
  const [posts, setPosts] = useState([]);
  const getDataTest = () => {
    getPostsData()
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
      console.log(posts);
  };
  return (
    <div className="App">
      <AppRouter/>
      <h1>Test!</h1>
      <UserRegister/>

    </div>
  );
}

export default App;
