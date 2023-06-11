import axios from 'axios';
import { BASE_URL_LOGIN } from '../config';


/**
 * 
 * @param {String} email 
 * @param {Strong} password 
 * @returns object
 */

export const login = async (username, password) => {
    try{
        const response = await axios.post(`${BASE_URL_LOGIN}login`, {
            username,
            password
        });
        console.log(response)
        if(response.status !== 200) throw new Error(message || "Error en el login");
        const { message, ...dataWuthoutMessage } = response.data;
        console.log(dataWuthoutMessage)
        //localStorage.clear();
        localStorage.setItem("userDevmura", JSON.stringify(dataWuthoutMessage));
        return response;
    }catch(err){
        console.log(err.response)
        console.log("Error en el login")
        return err.response;
    }
};