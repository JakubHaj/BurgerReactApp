import axios from 'axios';

const instance = axios.create({
    baseURL: '<firebase URL>'
});

export default instance;