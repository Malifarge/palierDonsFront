import styled from "styled-components";
import { BackgroundColor, SecondColor } from "./color";

export const Page = styled.section`
min-width: 100vw;
min-height: 100vh;
display:flex;
align-items:center;
justify-content: center;
background-color: ${BackgroundColor};

button{
    background: ${SecondColor};
    cursor:pointer;
}
`

export const HeaderContainer = styled.header<{ isvisible: string; }>`
    height:40px;
    position:fixed;
    top:0px;
    left: 0;
    width: 100%;
    
    div{
        display: ${(props)=>props.isvisible};
        background-color: ${BackgroundColor};
        padding: 10px;
    }
`