import { BASE_URL } from "../config";
import axios from "axios";


export const addFriend = async ( userId, frinedId, aut) =>{
    try{
        const post = await axios.post(`${BASE_URL}/friends?userId=${userId}&friendId=${frinedId}`,{
            Headers: {
                Authorization: `Bearer ${aut}`
            }
        });
        console.log(post.data);
        return post.data;
    }catch(error){
        console.error('Error al enviar la solicitud', error);
        throw error.response.data;
    }

}