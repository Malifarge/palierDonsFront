import { createContext, useState } from "react";
import userType from "../types/User";

const userContext = createContext({})

const userContextProvider = ({children}:any) =>{
    const [user,setUser] = useState<null | userType>(null)
    const [token,setToken] = useState<null | string>(null)

    const value = {
        user,
        setToken
    }

    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}

export {
    userContextProvider,
    userContext
  }