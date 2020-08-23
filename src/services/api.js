import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:3333", // Mac
    baseURL: "http://192.168.1.167:3333/", // Windows
});

export default api;
