import { BASE_URL } from "../config";
import axios from "axios";

/** 
 *  Funcion para hacer post para crear un usuario
 * @param {name} name 
 * @param {lastName} lastName 
 * @param {age} age 
 * @param {email} email 
 * @param {username} username 
 * @param {password} password 
 * @param {gender} gender
 * @param {country} country 
 */
export const userRegister = async (name, lastName, age, email, username, password, gender ,country) =>{
    try{
        const response = await axios.post(`${BASE_URL}/users`, {
            name: name,
            lastName: lastName,
            age: parseInt(age),
            email: email,
            username: username,
            password: password,
            gender: {id: parseInt(gender)},
            country: {id: country},
        });
       console.log("Respuesta del servidor", response.data)
    }catch(error){
        console.error('Error al enviar la solicitud', error)
    }
}
