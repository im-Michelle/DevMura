import axios from "axios";
import { BASE_URL } from "../config";

export const getLanguages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/languages`);
    const languages = response.data.map(c => ({ label: c.name, id: c.id }));
    return languages;
  } catch (error) {
    console.error("Error retrieving languages", error);
    return [];
  }
};