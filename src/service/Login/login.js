import axios from 'axios';
import { BASE_URL_LOGIN } from '../config';
import { getOwnUser } from '../Gets/getOwnUserService';


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
        if(response.status !== 200) throw new Error(message || "Error en el login");
        const { message, ...dataWuthoutMessage } = response.data;
        localStorage.setItem("userDevmura", JSON.stringify(dataWuthoutMessage));
        getOwnUser(dataWuthoutMessage.id, dataWuthoutMessage.token);
        return response;
    }catch(err){
        console.log(err.response)
        console.log("Error en el login")
        return err.response;
    }
};