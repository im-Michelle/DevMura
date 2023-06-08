import { BASE_URL } from "./config";
import axios from "axios";

export const getUserByID = async (id) =>{
    try{
        const response = await axios.get(`${BASE_URL}/users/${id}`,);
        const user = response
        return user
    }catch(e){
        console.error("No user fetch", e);
        return []
    }
}