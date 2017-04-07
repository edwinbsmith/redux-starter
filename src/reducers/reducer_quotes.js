import GET_QUOTES from '../actions/';

const INITIAL_STATE = { quotes: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_QUOTES:
            return { ...state, quotes: action.payload };
        default:
            return state;
    }
}