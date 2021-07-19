import axios from 'axios';

const API = axios.create({
    baseURL: 'https://cryptocurrency-finder.herokuapp.com',
});

export const fetchCurrency = async () => API.get('/currency');
