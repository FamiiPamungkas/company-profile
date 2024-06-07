import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: true
})

const initializeCsrf = async () => {
    var response = await axiosInstance.get('/sanctum/csrf-cookie');
    console.log(response);
}

export {axiosInstance, initializeCsrf}
