import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://192.168.8.168:7500/api',
    timeout: 10000,
});

export default apiClient;
