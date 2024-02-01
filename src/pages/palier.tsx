import { useParams } from "react-router-dom"

const Palier = () =>{
    const {userName} = useParams()
    console.log(userName);
    return(
        <h1>test</h1>
    )
}

export default Palier