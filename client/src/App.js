import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";

import { getPostsData } from "./Services/volPosts-service";
import { UserRegister } from "./Components/parts/Register-Compo/User-Register";

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <h1>Test!</h1>
      <UserRegister/>


    </div>

  );
}

export default App;
