/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { Input } from "../components/input"
import { login, signup } from "../api/user"
import { userContext } from "../context/User"
import { Form } from "../styles/login"
import { useNavigate } from "react-router-dom"

const Login = () =>{
    const [userName,setUserName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [secondPassword,setSecondPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [userSignup,setSignup] = useState<boolean>(false)

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

    const handleSignupclick = () =>{
        setError('')
        setSignup(!userSignup)
    }

    const handleSignup = async (e:any) =>{
        e.preventDefault()
        if(password===secondPassword){
            const user = {
                userName,
                password
            }

            await signup(user)
            setError('')
            const token = await login(user)
            if(token.token){
                setToken(token.token)
            }else{
                setError(token)
            }
            
            
        }else{
            setError('Les mots de passe ne correspondent pas')
        }
    }

    return(
        <>
        {userSignup ? 
            <Form onSubmit={handleSignup}>
                <Input text="userName" type="text" onChange={(e)=>setUserName(e.target.value)} defaultValue={userName} />
                <Input text="password" type="password" onChange={(e)=>setPassword(e.target.value)} defaultValue={password}  />
                <Input text="confirm password" type="password" onChange={(e)=>setSecondPassword(e.target.value)} defaultValue={secondPassword} />
                <button type="submit">submit</button>
                {error && <small className="error">{error}</small>}
                <div className="loginOrSignup">
                <p>déjà un compte ?</p>
                <div onClick={handleSignupclick}>
                    <p>me connecter</p>
                </div>
            </div>

            </Form>
            :
            <Form onSubmit={handleSubmit}>
            <Input text="userName" type="text" onChange={(e)=>setUserName(e.target.value)} defaultValue={userName}  />
            <Input text="password" type="password" onChange={(e)=>setPassword(e.target.value)} defaultValue={password} />
            <button type="submit">submit</button>
            <div className="loginOrSignup">
                <p>pas encore de compte ?</p>
                <div onClick={handleSignupclick}>
                    <p>Créer mon compte</p>
                </div>
            </div>
            {error && <small className="error">{error}</small>}
        </Form>
        }
        </>
    )
}

export default Login