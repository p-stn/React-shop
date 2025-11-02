import axios from "axios";
const api = axios.create({
    baseURL: 'https://crm-app-six-ruby.vercel.app/api/',
});
export const productApi = async (endpoint:string) => {
    const response = await api.get(endpoint);
    return response.data;
};