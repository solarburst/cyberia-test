import axios from "axios";

const api = axios.create({
    baseURL: "https://backend.cyberia.studio/api/v1"
})

export default api;