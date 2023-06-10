import axios from 'axios';
import { BASE_URL } from '../../config';

/**
 * 
 * @param {String} email 
 * @param {Strong} password 
 * @returns object
 */

export const login = async (email, password) => {
    try{
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        });
        localStorage.setItem("userDevmura", JSON.stringify(response.data));
        return response.data;
    }catch(err){
        return err.response.data;
    }
};