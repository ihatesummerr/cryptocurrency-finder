require('dotenv').config();
const axios = require('axios');

const devURL = 'https://sandbox-api.coinmarketcap.com';
const URL = 'https://pro-api.coinmarketcap.com';

axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = process.env.API_KEY;
const API = axios.create({ baseURL: URL });

exports.getCurrency = async (req, res) => {
    try {
        const { data } = await API.get('/v1/cryptocurrency/listings/latest', {
            params: { sort: 'market_cap', sort_dir: 'desc', limit: 30 },
        });
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
    }
};
