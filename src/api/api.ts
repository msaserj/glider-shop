import ky from "ky";

const apiInstance = ky.create({
    prefixUrl: 'http://localhost:27017',
})


export const glidersApi = {
    getGliders() {
        return apiInstance.get('/gliders')
    }
}