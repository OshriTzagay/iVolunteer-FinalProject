import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SideBar } from "./Components/parts/Side-Bar-Compo/SideBar";
import { Home } from "./Components/pages/Home-Compo/Home";
import { Footer } from "./Components/parts/Footer-Compo/Footer";
import { Header } from "./Components/parts/Header-Compo/Header";
import { VolPosts } from "./Components/pages/Vol-Posts-Compo/VolPosts";
import { NeedVolPosts } from "./Components/pages/NeedVol-Posts-Compo/NeedVolPosts";
import Welcome from "./Components/pages/Welcome-Comp/Welcome";
import { UserRegister } from "./Components/parts/Register-Compo/User-Register";
import { Login } from "./Components/parts/Login-Compo/Login";
import Donaters from "./Components/pages/Donaters-Compo/Donaters";
import  {AddNeedVolPost} from "./Components/parts/Add-Need-Vol-post-Compo/AddNeedVolPost";
import { AddVolPost } from "./Components/parts/Add-Vol-Post-Compo/AddVolPost";
import { useContext, useState, useEffect } from "react";
import { userContext } from "./Contexts/user-context";
export const AppRouter = () => {
  const { user } = useContext(userContext);

// console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
       {
         localStorage.token ? (<><Header/><SideBar/></>) : "" 
       }
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            <Route  exact path="/home" element={<Home />}></Route>
            <Route exact path="/needvolPost" element={<AddVolPost />}></Route>
            <Route exact path="/needvol" element={<NeedVolPosts />}></Route>
            <Route exact path="volposts" element={<VolPosts />}></Route>
            <Route exact path="/volPost" element={<AddNeedVolPost />}></Route>
            <Route exact path="/register" element={<UserRegister />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/donates" element={<Donaters />}></Route>

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};
