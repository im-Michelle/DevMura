import axios from "axios";
import { BASE_URL } from "../config";

export const getCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/countries`);
    const countries = response.data.map(c => ({ label: c.name, id: c.id, code: c.code }));
    return countries;
  } catch (error) {
    console.error("Error retrieving countries", error);
    return [];
  }
};
