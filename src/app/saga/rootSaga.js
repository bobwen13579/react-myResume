import { all } from 'redux-saga/effects';
import {
    poemsSaga
    // import other watchers from this file
} from './poemSagas';

// import watchers from other files
export default function* rootSaga() {
    yield all([
        poemsSaga()
        // add other watchers to the array
    ]);
}
