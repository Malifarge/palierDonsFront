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
    z-index:1000;
    
    div{
        display: ${(props)=>props.isvisible};
        background-color: ${BackgroundColor};
        padding: 10px;
        align-items:center;
        justify-content: space-between;
        img{
            width:60px;
            height:60px;
        }

        nav{
            display:flex;
            align-items:center;
            gap:10px;
            margin-right:10px;

            button{
                background:none;
                border:none;
                color:#00000050;
                cursor:pointer;
                text-decoration:none;
                &:hover{
                    color:#000000
                }
            }
        }
    }
`