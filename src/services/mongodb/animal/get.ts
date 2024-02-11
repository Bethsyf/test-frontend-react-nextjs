import axios from 'axios';

export const getAnimalById = async (id:string) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

  try {
    const response = await axios.get(`${apiUrl}/animal?id=${id}`);
    console.log(response)

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.statusText };
    }
  } catch (error:any) {
    return { success: false, error: error.message };
  }
};
