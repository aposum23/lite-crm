import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const authUrl = import.meta.env.VITE_AUTH_URL;
const clientId = import.meta.env.VITE_CLIENT_ID;

const httpCore = axios.create({
    baseURL: baseUrl,
    timeout: 10 * 60 * 1000,
    headers: {
        'Content-Type': 'application/json'
    },
});

const httpCoreAuth = axios.create({
    baseURL: authUrl,
    timeout: 10 * 60 * 1000,
    headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': clientId
    },
});

export default { httpCore, httpCoreAuth };
