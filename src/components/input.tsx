import InputStyle from "../styles/login"
import InputType from "../types/login"

const Input = ({label,type,onChange}:InputType) =>{
    return(
        <InputStyle type={type} onChange={onChange}>{label}</InputStyle>
    )
}