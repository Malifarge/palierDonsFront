import { useContext, useState } from "react"
import { Input } from "../components/input"
import { login } from "../api/user"
import { userContext } from "../context/User"

const Login = () =>{
    const [userName,setUserName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const {setToken} = useContext(userContext) as any

    const handleSubmit = async(e:any) =>{
        e.preventDefault()
        setError('')
        const token = await login({userName,password})
        if(token.token){
            setToken(token.token)
        }else{
            setError(token)
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input text="userName" type="text" onChange={(e)=>setUserName(e.target.value)} />
            <Input text="password" type="text" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">submit</button>
            {error && <small>{error}</small>}
        </form>
    )
}

export default Login