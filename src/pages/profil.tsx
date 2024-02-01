import { useContext, useEffect } from "react"
import { userContext } from "../context/User"
import { useNavigate } from "react-router-dom"

const Profil = () =>{
    const { user } = useContext(userContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[user])
    return(
        <h1>{user?.userName}</h1>
    )
}

export default Profil