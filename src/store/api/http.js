import axios from 'axios'

const service = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    timeout: 5000
});

// export const getRequest = (url, params) => {
//     return service.get(url, { params });
// };

// export const postRequest = (url, data) => {
//     return service.post(url, data);
// };

export default {
    getRequest(url, params) {
        return service.get(url, { params });
    },
    postRequest(url, data) {
        return service.post(url, data);
    },
}