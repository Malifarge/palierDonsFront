import styled from "styled-components";

export const InputStyle = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`

export const Form = styled.form`
    width: 300px;
    display:flex;
    align-items: center;
    flex-direction: column;
    gap:10px;

    button{
        padding:5px;
    }
    .error{
        color:red;
    }

    .loginOrSignup{
        display:flex;
        gap: 5px;
        font-size:15px;

        div{
            color : blue;
            cursor: pointer;
        }
    }
`