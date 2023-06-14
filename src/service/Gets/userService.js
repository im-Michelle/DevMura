import { BASE_URL } from "../config";
import axios from "axios";

export const getUserByID = async (id, token) =>{
    try{
        const response = await axios.get(`${BASE_URL}/users/dto/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const user = response.data;
        return user
    }catch(e){
        console.error("No user fetch", e);
        return []
    }
}