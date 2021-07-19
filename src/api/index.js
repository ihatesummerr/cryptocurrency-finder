import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchCurrency = async () => API.get('/currency');
