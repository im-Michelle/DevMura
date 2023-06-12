import axios from "axios";
import { BASE_URL } from "../config";

export const getGenders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genders`);
    const genders = response.data.map(c => ({ label: c.genderName, id: c.id }));
    return genders;
  } catch (error) {
    console.error("Error retrieving genders", error);
    return [];
  }
};
