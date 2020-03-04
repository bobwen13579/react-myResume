import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_POEMS, FETCHPOEMSUCCESS } from '../reudx/constants/action-types';
import axios from "axios";

 function* helloSaga() {
    console.log('Hello Sagas!');
}

const getData = () => {
    return axios.request({
        method: 'get',
        url: 'http://localhost:3300/authors',
    })
};

 function* fetchPoems() {
     console.log('before');
    const { data }= yield call (getData);
     console.log(data);
    yield put({
        type: FETCHPOEMSUCCESS,
        poems: data,
    })
}



export function* poemsSaga() {
    yield takeLatest(FETCH_POEMS, fetchPoems);
}
