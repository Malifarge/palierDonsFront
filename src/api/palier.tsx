import paliersType from "../types/paliers"

const getPalier = async(id:number) =>{
    const request = await fetch(`${process.env.REACT_APP_API_URL}/palier/user/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const response = await request.json()
    return response
}

const PutPalier = async(id:number,palier:paliersType)=>{
    const request = await fetch(`${process.env.REACT_APP_API_URL}/palier/${id}`,{
        method: "PUT",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(palier)
    })
    const response = await request.json()
    return response
}

const DeletePalier = async(id:number)=>{
const request = await fetch(`${process.env.REACT_APP_API_URL}/palier/${id}`,{
    method:"DELETE",
    headers:{
        'Content-Type' : 'application/json'
    }
})
const response = await request.json()
return response
}

const CreatePalier = async(palier:paliersType)=>{
    const request = await fetch(`${process.env.REACT_APP_API_URL}/palier`,{
        method:"POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(palier)
    })
    const response = request.json()
    return response
}

export  {
    getPalier,
    PutPalier,
    DeletePalier,
    CreatePalier
}