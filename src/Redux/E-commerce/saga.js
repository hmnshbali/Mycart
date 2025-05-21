import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { productOperations, cartOperations } from "./constant";
import { getProductsApi, fetchproductdata } from './api';

// function* fetchProductsSaga() {
//     try {
//         yield put({ type: productOperations.SET_LOADING });
//         const response = yield call(productAPI.getAllProducts);
//         yield put({ type: productOperations.FETCH_PRODUCTS_SUCCESS, payload: response.data });
//     } catch (error) {
//         yield put({ type: productOperations.SET_ERROR, payload: error.message });
//     }
// }

// function* fetchProductByIdSaga(action) {
//     try {
//         yield put({ type: productOperations.SET_LOADING });
//         const response = yield call(productAPI.getProductById, action.payload);
//         yield put({ type: productOperations.FETCH_PRODUCT_BY_ID_SUCCESS, payload: response.data });
//     } catch (error) {
//         yield put({ type: productOperations.SET_ERROR, payload: error.message });
//     }
// }

// function* fetchProductsByCategorySaga(action) {
//     try {
//         yield put({ type: productOperations.SET_LOADING });
//         const response = yield call(productAPI.getProductsByCategory, action.payload);
//         yield put({ type: productOperations.FETCH_PRODUCTS_SUCCESS, payload: response.data });
//     } catch (error) {
//         yield put({ type: productOperations.SET_ERROR, payload: error.message });
//     }
// }

// function* searchProductsSaga(action) {
//     try {
//         yield put({ type: productOperations.SET_LOADING });
//         const response = yield call(productAPI.searchProducts, action.payload);
//         yield put({ type: productOperations.FETCH_PRODUCTS_SUCCESS, payload: response.data });
//     } catch (error) {
//         yield put({ type: productOperations.SET_ERROR, payload: error.message });
//     }
// }

// function* watchProducts() {
//     yield takeLatest(productOperations.FETCH_PRODUCTS, fetchProductsSaga);
//     yield takeLatest(productOperations.FETCH_PRODUCT_BY_ID, fetchProductByIdSaga);
//     yield takeLatest(productOperations.FETCH_PRODUCTS_BY_CATEGORY, fetchProductsByCategorySaga);
//     yield takeLatest(productOperations.SEARCH_PRODUCTS, searchProductsSaga);
// }

// export function* productSaga() {
//     yield all([fork(watchProducts)]);
// }




function* getProductsFunction() {
    
    try {
        yield put({
            type: productOperations.PRODUCT_LOADING,
            payload: {},
        });
        const response = yield call(getProductsApi); 
        console.log(response, 'responseresponse');
        if (response.status == 200) {
            yield put({
                type: productOperations.PRODUCT_SUCCESS,
                payload: response.data
            });                                                
        } else {
            yield put({
                type: productOperations.PRODUCT_FAILURE,
                payload: { ...response.data },
            });
        }
    } catch (error) {
        // console.log(error, 'qwert');
        yield put({
            type: productOperations.PRODUCT_FAILURE,
            payload: error?.response?.data,
        }); 
    }
}



export function* GetProductslWatcher() {
    yield takeEvery(productOperations.PRODUCT, getProductsFunction);
}
function* getCartFunction(action) {
    try {
        yield put({
            type: cartOperations.GET_CART_LOADING,
            payload: {},
        });
        const response = yield call(fetchproductdata, action);
        console.log(response, 'responseresponse');
        
        if (response.status === 200) {
            yield put({
                type: cartOperations.GET_CART_SUCCESS,
                payload: response.data
            });
        } else {
            yield put({
                type: cartOperations.GET_CART_FAILURE,
                payload: { ...response.data },
            });
        }
    } catch (error) {
        yield put({
            type: cartOperations.GET_CART_FAILURE,
            payload: error?.response?.data,
        });
    }
}

function* GetCartWatcher() {
    yield takeEvery(cartOperations.GET_CART, getCartFunction);
}

function* productSaga() {
    yield all([fork(GetProductslWatcher), fork(GetCartWatcher)]);
}

export default productSaga;


