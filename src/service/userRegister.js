import { BASE_URL } from "./config";
import axios from "axios";


export const userRegister = async (user, name) =>{
    try{
        const response = await axios.post(`${BASE_URL}/users`, user);
        console.log("Aqui estoy xd")
        console.log({name})
        console.log("Aca otra vez")
        console.log({user})
        console.log(" USUARIO REGISTRADO :D" + user)
    }catch(error){
        console.log("Aca entro por que no jalo xd")
        console.error(error)
    }
}

//http://localhost:8080/api/users