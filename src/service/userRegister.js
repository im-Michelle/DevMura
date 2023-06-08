import { BASE_URL } from "./config";
import axios from "axios";


export const userRegister = async (user) =>{
    try{
        const response = await axios.post(`${BASE_URL}/users`, user);
        console.log(user)
    }catch(error){
        console.error(e)
    }
}


//http://localhost:8080/api/users