/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPalier } from "../api/palier"
import paliersType from "../types/paliers"
import { BackgroundDonation, PalierLine } from "../styles/palier"
import { getUserName } from "../api/user"

const Palier = () =>{
    const [paliers,setPaliers] = useState<[]|[paliersType]>([])
    const [paliersSort,setPaliersSort] = useState<[] | [paliersType]>([])
    const [paliers1,setPaliers1] = useState<[]|[paliersType]>([])
    const [paliers2,setPaliers2] = useState<[]|[paliersType]>([])


    const [Username,setUsername] = useState<string>('')

    const {id} = useParams()

    useEffect(()=>{
        getPaliers()
    },[])
    
    useEffect(()=>{
        
        const newPaliers = paliers.sort((a:paliersType,b:paliersType)=>{
            return a.Prix - b.Prix
        })
        setPaliersSort(newPaliers)
    },[paliers])

    useEffect(()=>{
        const tri1 = [] as any
        const tri2 = [] as any
        paliersSort.forEach((palier:paliersType)=>{
            if(paliers.indexOf(palier as never)<=paliers.length/2 -1){
                tri1.push(palier)
            }else{
                tri2.push(palier)
            }
        })
        setPaliers1(tri1)
        setPaliers2(tri2)
    },[paliersSort])

    const getPaliers = async() =>{
        const allPaliers = await getPalier(Number(id))
        setPaliers(allPaliers)
        const Username = await getUserName(Number(id))
        setUsername(Username);
        
    }
    return(
        <BackgroundDonation>
            <h1>{Username}</h1>
        <div className="contain">
        {paliers1.map((palier:paliersType)=>{
                    return <PalierLine key={palier.id} className={`${palier.Validation ? "valider":""}`}>
                                <p className={'argent'}>{palier.Prix}€</p>
                                <p>{palier.Goal}</p>
                            </PalierLine>
            })}
        </div>
        <div className="contain">
            {paliers2.map((palier:paliersType)=>{
                    return <PalierLine key={palier.id} className={`${palier.Validation ? "valider":""}`}>
                                <p className={'argent'}>{palier.Prix}€</p>
                                <p>{palier.Goal}</p>
                            </PalierLine>
            })}
        </div>
        </BackgroundDonation>
    )
}

export default Palier