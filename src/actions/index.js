import axios from 'axios';

export const GET_QUOTES = 'GET_QUOTES';
const root = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

export function getQuotes() {
    const request = axios.get(root);
    return {
        type: GET_QUOTES,
        payload: request
    }
}