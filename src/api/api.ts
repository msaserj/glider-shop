import ky from 'ky';

const apiInstance = ky.create({
   prefixUrl: 'http://localhost:8000/api'
   // prefixUrl: 'https://jsonplaceholder.typicode.com',
});

export const glidersApi = {
   getGliders() {
      return apiInstance.get('gliders');
   },
   getGlider(id: string) {
      return apiInstance.get(`gliders/${id}`);
   }
};
