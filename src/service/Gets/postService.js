import { BASE_URL } from "../config";
import axios from "axios";

export const getAllPost = async (lastPostIndex) =>{
    try{
        const response = await axios.get(`${BASE_URL}/posts?page=${lastPostIndex}&size=5`,);
        return response.data;
    }catch(e){
        console.error("No data", e);
        return []
    }
}

