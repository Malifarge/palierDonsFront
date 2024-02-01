import { useContext, useEffect, useState } from "react"
import { Input } from "../components/input"
import { login } from "../api/user"
import { userContext } from "../context/User"
import { Form } from "../styles/login"
import { useNavigate } from "react-router-dom"

const Login = () =>{
    const [userName,setUserName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const {setToken,user} = useContext(userContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate("/profil")
        }
    },[user])

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
        <Form onSubmit={handleSubmit}>
            <Input text="userName" type="text" onChange={(e)=>setUserName(e.target.value)} />
            <Input text="password" type="text" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">submit</button>
            {error && <small>{error}</small>}
        </Form>
    )
}

export default Login