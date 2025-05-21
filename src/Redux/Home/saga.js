// import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
// import { orders } from './constants';
// import { getOrdersApi } from './api';
// function* GetOrdersFunction(data) {
//     try {
//         yield put({
//             type: orders.ORDERS_LOADING,
//             payload: {},
//         });
//         const response = yield call(getOrdersApi, data);
//         // console.log(response, 'responseresponse');
//         if (response.status == 200) {
//             yield put({
//                 type: orders.ORDERS_SUCCESS,
//                 payload: { ...response.data },
//             });
//         } else {
//             yield put({
//                 type: orders.ORDERS_FAILURE,
//                 payload: { ...response.data },
//             });
//         }
//     } catch (error) {
//         // console.log(error, 'qwert');
//         yield put({
//             type: orders.ORDERS_FAILURE,
//             payload: error?.response?.data,
//         });
//     }
// }
// export function* GetOrderslWatcher() {
//     yield takeEvery(orders.ORDERS, GetOrdersFunction);
// }
// function* shivaayOrderSaga() {
//     yield all([fork(GetOrderslWatcher)]);
// }
// export default shivaayOrderSaga;
 