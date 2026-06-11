import axios from "axios";

const api = axios.create({
    baseURL: "https://crushable-kiwi-doornail.ngrok-free.dev",
});

export default api;