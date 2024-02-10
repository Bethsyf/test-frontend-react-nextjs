import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAnimals = async () => {
  try {
    const response = await axios.get(`${apiUrl}/animals`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(
        'Error al obtener animales:',
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error('No se recibió respuesta al obtener animales:', error.request);
    } else {
      console.error('Error inesperado al obtener animales:', error.message);
    }
    throw error; // Re-lanza el error para que el llamador pueda manejarlo
  }
};
