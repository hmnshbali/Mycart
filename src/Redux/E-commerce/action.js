import { productOperations } from "./constant";
import { cartOperations } from "./constant";
import { searchOperations } from './constant';


export const fetchProducts = () => ({
    type:productOperations.PRODUCT,
    // data
});


export const addToCart = (id) => ({
    type: cartOperations.GET_CART,
    id
});

export const decrementCart=(id)=>({
   type: cartOperations.DECREMENT_CART,
   id
});

export const incrementCart=(id)=>({
    type: cartOperations.INCREMENT_CART,
    id
 });

 export const removeFromCart=(id)=>({
    type: cartOperations.REMOVE_CART,
    id
 });

 export const setSearchQuery = (query) => ({
  type: searchOperations.SET_SEARCH_QUERY,
  payload: query,
});

export const setCategory = (category) => ({
  type: searchOperations.SET_CATEGORY,
  payload: category,
});
 