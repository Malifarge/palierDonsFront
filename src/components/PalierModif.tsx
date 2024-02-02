import { useState } from "react";
import { PutPalier } from "../api/palier"
import { PalierLine } from "../styles/palier"
import PalierModifProps from "../types/PalierModifProps"

const PalierModif = ({palier,refresh}:PalierModifProps) =>{
    const [isChecked, setIsChecked] = useState<boolean>(palier.Validation);

    const onCheckChange = async (e:any)=>{
        setIsChecked(e.target.checked)
        const newPalier = {
            ...palier,
            Validation:e.target.checked,
        }
        await PutPalier(palier.id,newPalier)
        refresh()      
    }
    return(
        <PalierLine className={`${palier.Validation ? "valider":""}`}>
            <input type="checkbox" onChange={onCheckChange} checked={isChecked}/>
            <p className={'argent'}>{palier.Prix}€</p>
            <p>{palier.Goal}</p>
        </PalierLine>
    )
}

export default PalierModif