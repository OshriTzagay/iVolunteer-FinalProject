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

export const AppRouter = () => {
  return (
    <div className="App">
        <BrowserRouter>
      <Header />
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>

          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/needvol" element={<NeedVolPosts />}></Route>
          <Route exact path="volposts" element={<VolPosts />}></Route>
          <Route exact path="/register" element={<UserRegister />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
    </div>
  
  );
};
 