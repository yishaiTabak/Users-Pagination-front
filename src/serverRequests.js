import axios from "axios";


const URL_SERVER = "http://localhost:5132"

export const getAllUsersCount = async () =>{
    try{
        const res = await axios.get(URL_SERVER + '/api/users/user-count')        
        return res.data
    }catch(err){        
        return []
    }
}

export const getUsers = async (filters) =>{
    try{
        const res = await axios.post(URL_SERVER + '/api/users/get-filtered-users',filters)        
                
        return res.data
    }catch(err){        
        
        return {}
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

export const getEmailProviders = async (count) =>{
    try{
        const res = await axios.get(URL_SERVER + `/api/emailProviders/`)                
        return res.data
    }catch(err){
        return []
    }
}