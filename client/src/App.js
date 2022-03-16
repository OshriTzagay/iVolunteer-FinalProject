import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./AppRouter";
import UserContextProvider from "./Contexts/user-context";
import Welcome from "./Components/pages/Welcome-Comp/Welcome";
import { UserRegister } from "./Components/parts/Register-Compo/User-Register";
import { AddVolPost } from "./Components/parts/Add-Vol-Post-Compo/AddVolPost";
import { Login } from "./Components/parts/Login-Compo/Login";
function App() {
  return (
    <div className="someDiv">
      
       <UserContextProvider>
        <AppRouter />
      </UserContextProvider> 
      

    </div>
  );
}

export default App;
