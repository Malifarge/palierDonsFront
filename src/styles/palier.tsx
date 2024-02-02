import styled from "styled-components";

export const BackgroundDonation = styled.article`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:space-around;
background:url("/images/Background.png") no-repeat center/100vw 100vh;

h1{
    margin:0;
    font-family: 'Carattere', cursive;
    font-size: 50px;
    position:fixed;
    top:5px;
    left:5px;
}
.contain{
    display:flex;
    flex-direction:column;
    height: 60%;
    max-width:40%;
}
.valider{
    color:#276429;
    background:#CAC5BA;
}
`

export const PalierLine = styled.div`
    display:flex;
    gap:20px;
    margin-top:10px;
    align-items:center;
    p{
        margin:0;
        font-weight: bold;
        text-align: left;
    }
    .argent{
        text-align: right;
        width:60px;
    }

    button{
        height: 20px;
    };
`

export const ChangeLigne =styled.form`
    display:flex;
    gap:5px;
    margin-left:20px;

    label{
        margin-right: 5px;
    };

    .changePrix{
        width:60px;
    }

`