import {createContext, useState} from 'react';
export const userContext=createContext();

 const userContextProvider =({children})=>{
    const [user,setUser]=useState({});

    return(
        <userContext.Provider value={{user,setUser}} >
            {children}
        </userContext.Provider>
    )

}

export default userContextProvider;