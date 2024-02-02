import userType from "../types/User"

const login = async(user:userType) =>{
    const request = await fetch(`${process.env.REACT_APP_API_URL}/login`,{
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
    const request = await fetch (`${process.env.REACT_APP_API_URL}/me`,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const response = await request.json()
    return response
}

const getUserName = async(user_Id:number)=>{
    const request = await fetch(`${process.env.REACT_APP_API_URL}/user/${user_Id}`,{
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const response = await request.json()
    return response
}

export {
    login,
    me,
    getUserName
}