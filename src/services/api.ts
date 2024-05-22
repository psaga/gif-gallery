import axios from 'axios';

const BASE_URL = 'https://api.giphy.com/v1/gifs';

class ApiService {
  async fetchData(endpoint: string, params: any): Promise<any> {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, { params: { ...params, api_key: import.meta.env.VITE_API_KEY } });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
export default ApiService;
