import React, { useEffect, useState } from "react";
import { GetPostsData } from "../../../Services/volPosts-service";
import Loading from "../../parts/Loading/Loading-component";
import Post from "./Post-Component";
import "./VolPost-style.css";

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
  return (
    <div>
      <h1> Volunteer Posts!</h1>
      <section className="cards">
        {
          isLoading ?
            <Loading /> :
            Array.map((item) => {
              return <Post item={item} />
            })}
      </section>
    </div>
  );
};
