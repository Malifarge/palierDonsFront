import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPalier } from "../api/palier"
import paliersType from "../types/paliers"
import { BackgroundDonation, PalierLine } from "../styles/palier"

const Palier = () =>{
    const [paliers,setPaliers] = useState<[]|[paliersType]>([])
    const {id} = useParams()
    useEffect(()=>{
        getPaliers()
    },[])

    const getPaliers = async() =>{
        const allPaliers = await getPalier(Number(id))
        setPaliers(allPaliers)
        
    }
    return(
        <BackgroundDonation>
            <h1>Arzhuleen</h1>
        <div className="contain">
            {paliers.map((palier:paliersType)=>{
                if(palier.id<=10){
                    return <PalierLine key={palier.id}>
                                <p className="argent">{palier.Prix}€</p>
                                <p>{palier.Goal}</p>
                            </PalierLine>
            }
            })}
        </div>
        <div className="contain">
            {paliers.map((palier:paliersType)=>{
                if(palier.id>10){
                    return <PalierLine key={palier.id}>
                                <p>{palier.Prix}€</p>
                                <p>{palier.Goal}</p>
                            </PalierLine>
            }
            })}
        </div>
        </BackgroundDonation>
    )
}

export default Palier