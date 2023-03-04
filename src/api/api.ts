import { GliderType } from '../store/gliders/glidersSlice';
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://vds.msaserj.ru/api'
  // baseURL: 'http://localhost:3010/api'
});

export const glidersApi = {
  getGliders() {
    return apiInstance.get('/gliders').then(res => res.data);
  },
  getGlidersFromCart(ids: string | null) {
    console.log(ids);
    console.log(typeof ids);
    return apiInstance.get(`/gliders/cart/${ids}`).then(res => res.data);
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
