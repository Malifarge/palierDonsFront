/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { userContext } from "../context/User"
import { useNavigate } from "react-router-dom"
import {  getPalier } from "../api/palier"
import paliersType from "../types/paliers"
import { BackgroundProfil } from "../styles/profil"
import PalierModif from "../components/PalierModif"

const Profil = () =>{
    const [paliers,setPaliers] = useState<[]|[paliersType]>([])
    const [paliers1,setPaliers1] = useState<[]|[paliersType]>([])
    const [paliers2,setPaliers2] = useState<[]|[paliersType]>([])

    const { user } = useContext(userContext) as any

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
            if(paliers.indexOf(palier as never)<=9){
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

    return(
        <BackgroundProfil>
            <h1>{user?.userName}</h1>
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
        </BackgroundProfil>
    )
}

export default Profil