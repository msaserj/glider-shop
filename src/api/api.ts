import { GliderType } from '../store/gliders/glidersSlice';
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8000/api'
  // prefixUrl: 'https://jsonplaceholder.typicode.com',
});

export const glidersApi = {
  getGliders() {
    return apiInstance.get('/gliders').then(res => res.data);
  },
  getGlider(id: string) {
    return apiInstance.get(`/gliders/${id}`).then(res => res.data);
  },
  createGlider(glider: GliderType) {
    return apiInstance.post(`/gliders`, glider, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};
