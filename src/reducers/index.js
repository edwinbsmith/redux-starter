import { combineReducers } from 'redux';
import quoteReducer from './reducer_quotes';

const rootReducer = combineReducers({
  quotes: quoteReducer
});

export default rootReducer;
