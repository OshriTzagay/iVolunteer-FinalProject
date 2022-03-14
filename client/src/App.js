import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";
import UserContextProvider from "./Contexts/user-context";
import Welcome from "./Components/pages/Welcome-Comp/Welcome";
import { getPostsData } from "./Services/volPosts-service";
import { UserRegister } from "./Components/parts/Register-Compo/User-Register";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <AppRouter />
        <UserRegister />
      </UserContextProvider>
      
    <Welcome/>
    </div>
  );
}

export default App;
