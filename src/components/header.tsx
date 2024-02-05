import { useState } from "react"
import { HeaderContainer } from "../styles/général"

const Headers = () =>{
    const [isMouseOver,setIsMouseOver] = useState<string>('none')

    return(
        <HeaderContainer isvisible={isMouseOver} onMouseEnter={() => setIsMouseOver('flex')} onMouseLeave={() => setIsMouseOver('none')}>
            <div>
                <p>Test</p>
            </div>
        </HeaderContainer>
    )
}

export default Headers