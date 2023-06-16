import axios from "axios";
import { BASE_URL } from "../config";


export const getComments = async ( aut , id ) => {
    try {
        const response = await axios.get(`${BASE_URL}/comments/active/id?postId=${id}`,{
            headers: {
                Authorization: `Bearer ${aut}`,
            },
        }
        );
        return response.data;
    }catch(error){
        console.error("Error retrieving comments", error);
        return [];
    }
}