import { all } from 'redux-saga/effects';
import productSaga from './E-commerce/saga';


export default function* rootSaga() {
    yield all([
        productSaga()
    ]);
}
