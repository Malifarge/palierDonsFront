import styled from "styled-components";
import { SecondColor } from "./color";

export const BackgroundProfil = styled.article`
width:100vw;
display:flex;
align-items:center;
justify-content:space-around;
font-size: 13px;
background: #FEE3D8;

.head{
    display:flex;
    gap:10px;
    align-items:center;
    flex-wrap:wrap;
    width:300px;
    margin:0;
    position:fixed;
    top:5px;
    left:5px;
}

h1{
    margin:0;
    font-family: 'Carattere', cursive;
    font-size: 50px; 
}
.contain{
    display:flex;
    flex-direction:column;
    margin-top:50px;
    height: 60%;
    max-width:40%;
}
.valider{
    color:#276429;
    background:${SecondColor};
}
`