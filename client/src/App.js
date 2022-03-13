import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";
import UserContextProvider from "./Contexts/user-context";

import { getPostsData } from "./Services/volPosts-service";
import { UserRegister } from "./Components/parts/Register-Compo/User-Register";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <AppRouter />
        <UserRegister />
      </UserContextProvider>
      <h1>Test!</h1>
    </div>
  );
}

export default App;
