import { useNavigate } from "react-router-dom"
import { HomeStyle } from "../styles/homes"

const Home = () =>{
    const navigate = useNavigate()
    return(
        <HomeStyle>
            <button onClick={()=>navigate('/login')}>Login</button>
            <button onClick={()=>navigate('/stream')}>Liste des streams</button>
        </HomeStyle>
    )
}

export default Home