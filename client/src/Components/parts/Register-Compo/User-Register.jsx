import { useState } from "react"
import { userContext } from "../../../Contexts/user-context";
import { registerUser } from "../../../Services/user-service";

export const UserRegister = ()=>{
let ojb={FirstName:"matan",LastName:"ysayas",Email:"sasas@asa",Password:"123455"}
    const [User,setUser] = useState({})

    const AddUser = ()=>{
        registerUser(ojb);
    }
    return(
        <div>
            <form>
                <button onClick={AddUser}>click</button> <br /> 

                <label>First Name: </label>
                <input type="text" name="FirstName" id="" />
                
                <label>Last Name: </label>
                <input type="text" name="LastName" id="" />

                <label>Mail: </label>
                <input type="text" name="Mail" id="" />
                
                <label>Password </label>
                <input type="text" name="Password" id="" />
            </form>
        </div>
    )
}