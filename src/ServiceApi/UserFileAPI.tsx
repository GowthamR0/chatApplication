import { ClientApi } from "../ClientApi/ClientApi"

export async function userFileApi(data:any){
    try {
        const apiData={
        url:'http://localhost:8000/contactInformation',
        method:'post',
        data:data
    }
    const response:any=await ClientApi(apiData)
    return response
    }
    catch(err){
        return err
    }
    
}


