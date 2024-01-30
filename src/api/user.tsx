import userType from "../types/User"

const getPalier = (user:userType) =>{
    return(
        <p>{user.userName}</p>
    )
}

export {
    getPalier
}