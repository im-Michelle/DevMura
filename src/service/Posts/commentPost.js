import { BASE_URL } from "../config";
import axios from "axios";


export const commentPost = async ( postId , userId , commentBody ,aut ) =>{
    try {
        const post = await axios.post(`${BASE_URL}/comments?postId=${postId}&userId=${userId}`, {
            user : { id : userId },
            post : { id : postId },
            content : commentBody
        },{
            headers: {
                Authorization: `Bearer ${aut}`
            }
        });
        return post.data;
    }catch(error){
        console.error('Error al enviar la solicitud', error);
        throw error.response.data;
    }
}

