import axios from "axios";

const apiConfig = axios.create({
    baseURL: `localhost:8080/api/v1`,
    timeout: 5000,
})


export const api = () => apiConfig