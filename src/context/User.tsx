/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import userType from "../types/user";
import childrenType from "../types/children";
import { me } from "../api/user";

const userContext = createContext({})

const UserContextProvider = ({children}:childrenType) =>{
    const [user,setUser] = useState<null | userType>(null)
    const [token,setToken] = useState<null | string>(null)

    useEffect(()=>{
        const localToken = localStorage.getItem('token')
        if(localToken){
            setToken(localToken)
        }
    },[])

    useEffect(()=>{
        if(token){
            localStorage.setItem('token',token)
            getUser()
        }
    },[token])

    const getUser = async()=>{
        try{
            const User = await me(token)
            setUser(User)
        }catch(e){
            console.log(e);
            setToken(null)
            localStorage.removeItem('token')
        }
    }

    const logout = () =>{
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
    }

    const value = {
        user,
        setToken,
        logout
    }


    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}

export {
    UserContextProvider,
    userContext
  }