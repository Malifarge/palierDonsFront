import { useState } from "react"
import { InputStyle } from "../styles/login"
import InputType from "../types/login"

export const Input = ({text,type,onChange,className,defaultValue}:InputType) =>{
    const [value,setValue] = useState<string | number >(defaultValue ? defaultValue : "")

    const handleChange = (e:any)=>{
        setValue(e.target.value)
        onChange(e)
    }

    return(
        <InputStyle>
        <label htmlFor={text}>{text}</label>
        <input type={type} placeholder={`${text}...`} value={value && value} onChange={handleChange} className={className}/>
        </InputStyle>
    )
}