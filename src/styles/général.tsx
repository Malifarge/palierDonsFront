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