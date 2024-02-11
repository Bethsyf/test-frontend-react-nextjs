import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const updateAnimal = async (id: string, updatedFields: any) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/animals/${id}`;
    const response = await axios.patch(apiUrl, updatedFields);

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.statusText };
    }
  } catch (error: any) {
    console.error('Error updating animal:', error);

    return { success: false, error: error.message };
  }
};

