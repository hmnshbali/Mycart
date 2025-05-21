import { productOperations,cartOperations, searchOperations } from "./constant.js";

const initial_state = {
    data: [],
    loading: false,
    error: null
};

export const getProductReducer = (state = initial_state, action) => {
    switch (action.type) {
        case productOperations.PRODUCT:
            return {
                ...state,
                loading: true,
                error: null
            };
        case productOperations.PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case productOperations.PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case productOperations.PRODUCT_RESET:
            return initial_state;
        default:
            return state;
    }
};



const initial = {
    items: [],
    loading: false,
    error: null,
};

export const cartReducer = (state = initial, action) => {
    switch (action.type) {
        case cartOperations.GET_CART:
            return {
                ...state,
                loading: true,
                error: null
            };
        case cartOperations.GET_CART_SUCCESS:
            const exists = state.items.some(item => item.id === action.payload.id);
            if (exists) {
                return{
                    ...state,
                    loading:false,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              AA
                }
            }
            return {
                ...state,
                loading: false,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };
        case cartOperations.GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

            case cartOperations.DECREMENT_CART:
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.id
                            ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) }
                            : item
                    )
                };

                case cartOperations.INCREMENT_CART:
                    return {
                        ...state,
                        items: state.items.map(item =>
                            item.id === action.id
                                ? { ...item, quantity: Math.max((item.quantity || 0) + 1, 0) }
                                : item
                        )
                    };

                    case cartOperations.REMOVE_CART:
                        return {
                            ...state,
                            items: state.items.filter(item => item.id !== action.id),
                        };
                    
        default:
            return state;
    }

};


export const searchQuery = (state = '', action) => {
  switch (action.type) {
    case searchOperations.SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export const category = (state = '', action) => {
  switch (action.type) {
    case searchOperations.SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

