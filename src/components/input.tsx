import { InputStyle } from "../styles/login"
import InputType from "../types/login"

export const Input = ({text,type,onChange}:InputType) =>{
    return(
        <InputStyle>
        <label htmlFor={text}>{text}</label>
        <input type={type} placeholder={`${text}...`} onChange={onChange}/>
        </InputStyle>
    )
}