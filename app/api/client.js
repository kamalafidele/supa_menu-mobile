import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://supa-menu-backend.onrender.com/api',
    timeout: 10000,
});

export default apiClient;
