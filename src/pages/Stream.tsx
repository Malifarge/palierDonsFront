import { useEffect, useState } from "react"
import { getAllUsers } from "../api/user"
import userType from "../types/user"
import { useNavigate } from "react-router-dom"
import { StreamsListContain } from "../styles/Stream"

const Stream = () =>{
    const [usersList,setUserList] = useState<[] | [userType]>([])

    useEffect(()=>{
        AllUser()
    },[])

    const navigate = useNavigate()

    const AllUser = async()=>{

        const users = await getAllUsers()
        setUserList(users)
    }
    return(
        <StreamsListContain>
            <p>Pour voir qui est actuellement en stream : <a href="https://cdstream.fr/?page_id=33" target="_blank">ici</a> </p>
        {usersList.map(user=>{
            return <button onClick={()=>navigate(`/palier/${user.id}`)} key={user.id}>{user.userName}</button>
        })}
        </StreamsListContain>
    )
}

export default Stream