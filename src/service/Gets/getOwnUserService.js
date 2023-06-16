import { BASE_URL } from "../config";
import axios from "axios";


export const getOwnUser = async ( ownId, token) =>{
    try{
        const response = await axios.get(`${BASE_URL}/profiles/dto/${ownId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
            localStorage.setItem("ownProfile", JSON.stringify(response.data));
            return response.data;
        
    }catch(e){
        console.error("No user fetch", e);
        console.error(e.response);
        console.error(e.response.data);
        console.error(e.response.status);
        window.location.href = "/sign-in";
        return []
    }
}