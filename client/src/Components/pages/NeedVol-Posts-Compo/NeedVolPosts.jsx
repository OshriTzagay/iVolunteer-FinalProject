import { useEffect,useState } from "react";
import {GetPostsData} from "../../../Services/needVolPost-service";
import Loading from "../../parts/Loading/Loading-component";
import PostCard from "./PostCard-component.jsx"
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
    return (
        <div>
            <h1> I'm Really Need Volunteer!</h1>
            {
               isLoading?
               <Loading/>:
               Array.map((item)=>{
                   return <PostCard item={item}/>
               })}
        </div>

    )
}