import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { getPostsData } from "./Services/volPosts-service";
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
      <button onClick={getDataTest}>Click</button>
      {posts.map((post) => (
        <h1>{post.Description}</h1>
      ))}
    </div>
  );
}

export default App;
