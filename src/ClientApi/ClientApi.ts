import axios from "axios";

export async function ClientApi(data:any) {
    try{
        console.log(data);  
    const clientData= await axios(data)
    return clientData
    }
    catch(err)
    {
        console.log(err)
        
    }

    
}
