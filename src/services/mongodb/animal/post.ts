import axios from 'axios';

export const createAnimal = async (userData: any) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

  try {
    const response = await axios.post(`${apiUrl}/animals`, userData);

    if (response.status === 200 || response.status === 201) {
      const responseData = response.data;
      return { success: true, data: responseData };
    } else {
      return { success: false, error: response.statusText };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};