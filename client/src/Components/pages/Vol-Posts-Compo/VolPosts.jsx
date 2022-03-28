import React, { useEffect, useState } from "react";
import { GetPostsData } from "../../../Services/volPosts-service";
import Loading from "../../parts/Loading/Loading-component";
import Post from "./Post-Component";
import "./VolPost-style.css";
import Welcome from "../Welcome-Comp/Welcome";

export const VolPosts = () => {
  let [Array, setArray] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    GetPostsData()
      .then((result) => setArray(result))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false)) 

  }, [])
  {
    if (!localStorage.token) {
      return <Welcome />;
    }
  }
  
  return (
    <div className="Container">
      <h1 className="volPost-title">Avilable Volunteers</h1>
   
        {
          isLoading ?
            <Loading /> :
            Array.map((item) => {
              return <Post item={item} />
            })}
     
      <div className="spaceDiv"></div>
    </div>
  );
};
