import axios from "axios";

export const baseURL  = "http://172.20.10.3:8000";

export const instance = axios.create({
    baseURL: `${baseURL}/api`,
});

