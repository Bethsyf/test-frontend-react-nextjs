import axios from 'axios';

export const getAnimals = async (_id?: string) => {
  try {
    const apiUrl = _id ? `${process.env.NEXT_PUBLIC_API_BASE_URL}?ids=${_id}` : `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error al obtener animales:', response.status, response.statusText);
      throw new Error('Error al obtener animales');
    }
  } catch (error:any) {
    console.error('Error inesperado al obtener animales:', error.message);
    throw error;
  }
};
