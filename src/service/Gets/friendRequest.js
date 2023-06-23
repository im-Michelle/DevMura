import axios from "axios";
import { BASE_URL } from "../config";


export const friendRequest = async (ownId, aut )   => {
    try {
        const response = await axios.get(`${BASE_URL}/friends/user/${ownId}/requests`,{
            headers: {
                Authorization: `Bearer ${aut}`,
            },
        }
        );
        //console.log("friendRequest", response.data);
        return response.data;
    }catch(error){
        //console.error("Error retrieving friendRequest", error);
        return [];
    }
}