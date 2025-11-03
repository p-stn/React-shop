import axios from "axios";
const api = axios.create({
    baseURL: 'https://react-shop-brown-nine.vercel.app//api/',
});
export const productApi = async (endpoint:string) => {
    const response = await api.get(endpoint);
    return response.data;
};