interface InputType {
    text: string,
    type: string,
    onChange: (e:any)=> void,
    className?: string,
    defaultValue?: string | number
}

export default InputType