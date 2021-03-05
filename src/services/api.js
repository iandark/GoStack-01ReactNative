import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.44:3333/", // Mac
    //baseURL: "http://192.168.1.167:3333/", // Windows
});

export default api;
