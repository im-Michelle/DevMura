import { BASE_URL } from "../config";
import axios from "axios";

export const getAllPost = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/post`,);
        const post = response.data
        return post
    }catch(e){
        console.error("No data", e);
        return []
    }
}