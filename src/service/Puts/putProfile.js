import { BASE_URL } from "../config";
import axios from "axios";

/**
 * Función que actualiza un perfil de usuario
 * @param {number} id - ID del perfil a actualizar
 * @param {object} profileData - Datos del perfil a modificar
 */
export const updateProfile = async (id, profileData) => {
  try {
    await axios.put(`${BASE_URL}/users/${id}`, profileData);
    console.log("Perfil actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar el perfil", error);
    throw error.response.data;
  }
};
