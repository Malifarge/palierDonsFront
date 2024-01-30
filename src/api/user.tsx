import userType from "../types/User"

const login = async(user:userType) =>{
    const request = await fetch('https://palierdons-ed5087cda283.herokuapp.com/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const response = await request.json()
    return response
}

const me = async(token:string|null) =>{
    const request = await fetch ('https://palierdons-ed5087cda283.herokuapp.com/me',{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const response = await request.json()
    return response
}

export {
    login,
    me
}