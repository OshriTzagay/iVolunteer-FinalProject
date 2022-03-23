import { useEffect, useState } from "react";
import { GetPostsData } from "../../../Services/needVolPost-service";
import Loading from "../../parts/Loading/Loading-component";
import PostCard from "./PostCard-component.jsx";
import "../Vol-Posts-Compo/VolPost-style.css";
import { Login } from "../../parts/Login-Compo/Login";
export const NeedVolPosts = () => {
    let [Array,setArray] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        GetPostsData()
        .then((result) => setArray(result))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
        
    },[])
    {
      if (!localStorage.token) {
        return <Login />;
      }
    }
    return (
        <div>
            <h1> I'm Really Need Volunteer!</h1>
            <section className="cards">
            {
               isLoading?
               <Loading/>:
               Array.map((item)=>{
                   return <PostCard item={item}/>
               })}
            </section>
        </div>

    )
}
