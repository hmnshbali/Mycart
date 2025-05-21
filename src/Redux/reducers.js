import { combineReducers } from 'redux';
import { cartReducer, category, getProductReducer, searchQuery } from './E-commerce/reducer';
const rootReducer = combineReducers({
     getProductReducer,cartReducer,searchQuery,category
});

export default rootReducer;