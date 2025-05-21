// //------------------------------------R E D U C E R S-------------------------------------------------
// import { orders } from './constants';
// const initial_state = {
//     data: null,
//     message: '',
//     loading: false,
// };
// export const getOrdersReducer = (state = initial_state, action) => {
//     // console.log(action, 'getOrdersReducer');
//     switch (action.type) {
//         case orders.ORDERS:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case orders.ORDERS_SUCCESS:
//             return {
//                 data: action?.payload,
//                 loading: false,
//                 error: null,
//             };
//         case orders.ORDERS_RESET:
//             return initial_state;
//         case orders.ORDERS_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 data: action?.payload,
//             };
//         default:
//             return state;
//     }
// };
 