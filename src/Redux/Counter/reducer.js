import { operations } from './constant';

const initialState = {
    count: 0
};

const incrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case operations.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case operations.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case operations.RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};

export default incrementReducer; 