import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SideBar } from "./Components/parts/Side-Bar-Compo/SideBar";
import { Home } from "./Components/pages/Home-Compo/Home";
import { Footer } from "./Components/parts/Footer-Compo/Footer";
import { Header } from "./Components/parts/Header-Compo/Header";
import { VolPosts } from "./Components/pages/Vol-Posts-Compo/VolPosts";
import { NeedVolPosts } from "./Components/pages/NeedVol-Posts-Compo/NeedVolPosts";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <SideBar />
      
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/volposts" element={<VolPosts />}></Route>
          <Route exact path="/needvol" element={<NeedVolPosts />}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};
