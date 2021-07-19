import * as api from '../api';
import { FETCH_CURRENCY } from '../constants';

export const getCurrency = () => async (dispatch) => {
    try {
        const {
            data: { data },
        } = await api.fetchCurrency();
        console.log(data);
        dispatch({ type: FETCH_CURRENCY, payload: data });
    } catch (error) {
        console.error(error);
    }
};
