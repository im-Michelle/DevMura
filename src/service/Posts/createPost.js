import { BASE_URL } from "../config";
import axios from "axios";

export const createPost = async ( post_body, counter , img_source , aut , id) => {
    try{
        const post = await axios.post(`${BASE_URL}/posts?id=${id}`, {
            postBody: post_body,
            counter: counter,
            imgSource: img_source,
            user: { userId : id},
        },{
            headers: {
                Authorization: `Bearer ${aut}`
            }
        });
        
    }catch(error){
        console.error('Error al enviar la solicitud', error);
        throw error.response.data;
    }
}