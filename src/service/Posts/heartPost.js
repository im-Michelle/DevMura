import { BASE_URL } from "../config";
import axios from "axios";

/**
 * Funcion para dar like a un post
 * @param {Int} userId 
 * @param {Int} postId 
 * @param {String} aut 
 * @returns response.data
 */

export const heartPost = async ( userId , postId , aut ) =>{
    try{
        const response = await axios.post(`${BASE_URL}/hearts?postId=${postId}&userId=${userId}`,{
            user : {
                "id" : userId
            },
            post : {
                "id" : postId
            },
        },{
            headers: {
                Authorization: `Bearer ${aut}`
            }
        });
        console.log('Solicitud enviada correctamente', response.data);
        console.log('Status: ', response.data.status);
        return response.data.status;
    }catch(error){
        console.error('Error al enviar la solicitud', error);
        throw error.response.data;
    }
}
