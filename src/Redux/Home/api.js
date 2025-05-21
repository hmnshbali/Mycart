// import { APICore } from '../../helpers/api/apiCore';
// import * as URL from '../../helpers/api/apiEndPoint';
// const api = new APICore();
// export function getOrdersApi(params: any): any {
// const { search, limit, page } = params?.data || {};
// // console.log(search, 'klmjhbg');
// if (!params?.data) {
// return api.get(`${URL.GET_SHIVAAY_ORDER}`);
// } else if (search === '') {
// return api.get(`${URL.GET_SHIVAAY_ORDER}?limit=${limit}&page=${page}`);
// } else {
// return api.get(`${URL.GET_SHIVAAY_ORDER}?search=${search}&limit=${limit}&page=${page}`);
// }
// }