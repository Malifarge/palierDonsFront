import InputStyle from "../styles/login"
import InputType from "../types/login"

export const Input = ({text,type,onChange}:InputType) =>{
    return(
        <>
        <label htmlFor={text}>{text}</label>
        <InputStyle type={type} placeholder={`${text}...`} onChange={onChange}/>
        </>
    )
}