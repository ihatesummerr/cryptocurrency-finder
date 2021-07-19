import { FETCH_CURRENCY } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CURRENCY:
            return action.payload;
        default:
            return state;
    }
};
