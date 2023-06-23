import { BASE_URL } from "../config";
import axios from "axios";

export const updateProfile = async (id, profileData, token) => {
  try {
    const profileDto = {
      id: profileData.id,
      birthday: profileData.birthday,
      age: profileData.age,
      bio: profileData.bio,
      img: profileData.img,
      github: profileData.github,
      likedin: profileData.likedin,
      createdAt: profileData.createdAt,
      background: profileData.background,
      role: profileData.role,
      name: profileData.name,
      lastName: profileData.lastName,
      country: profileData.country,
      username: profileData.username,
      countryName: profileData.countryName,
      posts: profileData.posts,
      idsLanguages: profileData.idsLanguages
    };

    const response = await axios.put(`${BASE_URL}/profiles/dto/${id}`, profileDto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("llega: ", profileData);
    console.log("Respuesta del servidor", response.data);
  } catch (error) {
    console.error('Error al enviar la solicitud', error);
    throw error.response.data;
  }
};
