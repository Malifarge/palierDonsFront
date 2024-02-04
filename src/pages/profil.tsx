/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { userContext } from "../context/User"
import { useNavigate } from "react-router-dom"
import {  CreatePalier, getPalier } from "../api/palier"
import paliersType from "../types/paliers"
import { BackgroundProfil } from "../styles/profil"
import PalierModif from "../components/PalierModif"
import { ChangeLigne } from "../styles/palier"
import { Input } from "../components/input"

const Profil = () =>{
    const [paliers,setPaliers] = useState<[]|[paliersType]>([])
    const [paliers1,setPaliers1] = useState<[]|[paliersType]>([])
    const [paliers2,setPaliers2] = useState<[]|[paliersType]>([])
    const [ajout,setAjout] = useState<boolean>(false)
    const [prix,setPrix] = useState<number | null>(null)
    const [goal,setGoal] = useState<string | null>(null)

    const { user,logout } = useContext(userContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }else{
            getPaliers()
        }
    },[user])

    useEffect(()=>{
        const tri1 = [] as any
        const tri2 = [] as any
        paliers.forEach((palier:paliersType)=>{
            if(paliers.indexOf(palier as never)<=paliers.length/2 -1 ){
                tri1.push(palier)
            }else{
                tri2.push(palier)
            }
        })
        setPaliers1(tri1)
        setPaliers2(tri2)
    },[paliers])

    const getPaliers = async() =>{
        const allPaliers = await getPalier(user.id)
        setPaliers(allPaliers)
    }

    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        if(prix && goal){
            const newPalier ={
                Prix:prix,
                Goal:goal,
                User_Id:user.id
            }
            
            await CreatePalier(newPalier)
            setAjout(false)
            getPaliers()
        }
    }

    return(
        <BackgroundProfil>
            <div className="head">
                <h1>{user?.userName}</h1>
                <button onClick={logout}>logout</button>
                <p>{`${process.env.REACT_APP_URL}/palier/${user?.id}`}</p>
            </div>
        <div className="contain">
            {paliers1.map((palier:paliersType)=>{
                    return <PalierModif palier={palier} refresh={getPaliers} key={palier.id}/>
            })}
        </div>
        <div className="contain">
            {paliers2.map((palier:paliersType)=>{
                    return <PalierModif palier={palier} refresh={getPaliers} key={palier.id}/>
            })}
        </div>
        {ajout ? 
            <ChangeLigne onSubmit={handleSubmit}>
                <Input className="changePrix" text="valeur" type="number" onChange={(e)=>setPrix(e.target.value)}/>
                <Input text="Goal" type="text" onChange={(e)=>setGoal(e.target.value)}/>
                            <button type="submit">Valider</button>
            </ChangeLigne>
            : 
            <button onClick={()=>setAjout(true)}>rajouter</button>}
        </BackgroundProfil>
    )
}

export default Profil