import axios from 'axios';

export const deleteAnimal = async (id:any) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

  try {
    const response = await axios.delete(`${apiUrl}/animals/${id}`);

    if (response.status === 200 || response.status === 204) {
      return { success: true };
    } else {
      return { success: false, error: response.statusText };
    }
  } catch (error:any) {
    return { success: false, error: error.message };
  }
};
