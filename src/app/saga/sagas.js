import { put, all, call } from 'redux-saga/effects';
import axios from "axios";

 function* helloSaga() {
    console.log('Hello Sagas!');
}

const getData = () => {
    axios.get(`http://localhost:3300/authors`)
        .then(res => {
            const persons = res.data;
            console.log(persons);
            return persons
        }).catch((err) => {
            console.log(err);
            return [];
    });
}

 function* fetchPoemTitle() {
     console.log('before');
    const data = yield call (getData);
     console.log('after');
    yield put({
        type: 'FETCHPOEMTITLE',
        poems: data,
    })
}


export function* rootSaga() {
    yield all([
        helloSaga(),
        fetchPoemTitle()
    ])
}
