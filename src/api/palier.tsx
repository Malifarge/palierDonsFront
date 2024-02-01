const getPalier = async(id:number) =>{
    const request = await fetch(`https://palierdons-ed5087cda283.herokuapp.com/palier/user/${id}`,{
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const response = await request.json()
    return response
}

export  {
    getPalier
}