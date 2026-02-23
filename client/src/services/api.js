import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
});

// Automatically add token to requests if it exists
API.interceptors.request.use((req) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        req.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return req;
});

export default API;
