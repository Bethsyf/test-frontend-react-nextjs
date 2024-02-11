import axios from 'axios';

export const getAnimals = async (_id?: string) => {
  try {
    const apiUrl = _id ? `${process.env.NEXT_PUBLIC_API_BASE_URL}?ids=${_id}` : process.env.NEXT_PUBLIC_API_BASE_URL
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
    throw error; 
  }
};
