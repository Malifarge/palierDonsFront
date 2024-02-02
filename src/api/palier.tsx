import paliersType from "../types/paliers"

const getPalier = async(id:number) =>{
    const request = await fetch(`https://palierdons-ed5087cda283.herokuapp.com/palier/user/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const response = await request.json()
    return response
}

const PutPalier = async(id:number,palier:paliersType)=>{
    const request = await fetch(`https://palierdons-ed5087cda283.herokuapp.com/palier/${id}`,{
        method: "PUT",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(palier)
    })
    const response = await request.json()
    return response
}

export  {
    getPalier,
    PutPalier
}