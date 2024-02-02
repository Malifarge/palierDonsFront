import { useState } from "react";
import { DeletePalier, PutPalier } from "../api/palier"
import { ChangeLigne, PalierLine } from "../styles/palier"
import PalierModifProps from "../types/PalierModifProps"
import { Input } from "./input";

const PalierModif = ({palier,refresh}:PalierModifProps) =>{
    const [isChecked, setIsChecked] = useState<boolean>(palier.Validation);
    const [change,setChange] = useState<boolean>(false)
    const [prix,setPrix] = useState<number>(palier.Prix)
    const [goal,setGoal] = useState<string>(palier.Goal)

    const handleCheckChange = async (e:any)=>{
        setIsChecked(e.target.checked)
        const newPalier = {
            ...palier,
            Validation:e.target.checked,
        }
        await PutPalier(palier.id,newPalier)
        refresh()      
    }

    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        const newPalier={
            ...palier,
            Prix:prix,
            Goal:goal
        }
        await PutPalier(palier.id,newPalier)
        setChange(false)
        refresh()
    }

    const handleDelete = async() =>{
        await DeletePalier(palier.id)
        refresh()
        
    }

    return(
        <PalierLine className={`${palier.Validation ? "valider":""}`}>
            {change ?   
                        <ChangeLigne onSubmit={handleSubmit}>
                            <Input className="changePrix" text="valeur" type="number" defaultValue={palier.Prix} onChange={(e)=>setPrix(e.target.value)}/>
                            <Input text="Goal" type="text" defaultValue={palier.Goal} onChange={(e)=>setGoal(e.target.value)}/>
                            <button type="submit">Valider</button>
                        </ChangeLigne>
                    :
                        <>
                            <input type="checkbox" onChange={handleCheckChange} checked={isChecked}/>
                            <p className={'argent'}>{palier.Prix}€</p>
                            <p>{palier.Goal}</p>
                            <button onClick={()=>setChange(true)}>modifier</button>
                            <button onClick={handleDelete}>Suprimer</button>
                        </> 
            }
        </PalierLine>
    )
}

export default PalierModif