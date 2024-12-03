import axios from "axios";


const URL_SERVER = "https://localhost:7106"

export const getAllUsersCount = async () =>{
    try{
        const res = await axios.get(URL_SERVER + '/api/users/user-count')        
        return res.data
    }catch(err){        
        return []
    }
}

export const getUsers = async (take, skip) =>{
    try{
        const res = await axios.get(URL_SERVER + '/api/users/',{params:{take, skip}})        
        return res.data
    }catch(err){
        return []
    }
}

export const postRandomUsers = async (count) =>{
    try{
        const res = await axios.post(URL_SERVER + `/api/users/insert-random/${count}`)        
        return res.data
    }catch(err){
        return []
    }
}