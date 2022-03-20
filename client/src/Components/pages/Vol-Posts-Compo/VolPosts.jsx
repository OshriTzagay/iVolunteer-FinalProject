import React,{ useEffect,useState} from "react";
import {GetPostsData} from "../../../Services/volPosts-service";
import Loading from "../../parts/Loading/Loading-component";
import Post from "./Post-Component";

export const VolPosts = () => {
  let [Array,setArray] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
      GetPostsData()
      // .then((result) => setArray(result))
       .then((res) => console.log(Array))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
      
  },[])
  return (
    <div>
      <h1> Volunteer Posts!</h1>
      {
          isLoading?
          <Loading/>:
          Array.map((item)=>{
              return <Post item={item}/>
          })}
    </div>
  );
};
