import { useState } from "react"
import { HeaderContainer } from "../styles/général"
import { useNavigate } from "react-router-dom"

const Headers = () =>{
    const [isMouseOver,setIsMouseOver] = useState<string>('none')

    const navigate = useNavigate()

    const handleLinkClick = (lieu:string) =>{
        navigate(`/${lieu}`)
    } 

    return(
        <HeaderContainer isvisible={isMouseOver} onMouseEnter={() => setIsMouseOver('flex')} onMouseLeave={() => setIsMouseOver('none')}>
            <div>
                <img src="/images/Imperatrice.png" alt="logo Félins pour l'autre"/>
                <nav>
                    <button onClick={()=>handleLinkClick("")}>Accueil</button>
                    <button onClick={()=>handleLinkClick("stream")}>Liste des streams</button>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Headers