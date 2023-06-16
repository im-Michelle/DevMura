import axios from "axios";
import { BASE_URL } from "../config";

export const getLanguages = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/languages`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const languages = response.data.map(l => ({ label: l.languageName, id: l.id }));
    return languages;
  } catch (error) {
    console.error("Error retrieving languages", error);
    return [];
  }
};