import { put, call, takeLatest } from 'redux-saga/effects';
import {
    FETCH_AUTHOR_LIST, FETCH_AUTHOR_LIST_SUCCESS,FETCH_AUTHOR_LIKED, FETCH_AUTHOR_LIKED_SUCCESS,
    FETCH_POEMS_BY_AUTHOR,FETCH_POEMS_BY_AUTHOR_SUCCESS
} from '../reudx/constants/action-types';
import axios from "axios";

const getData = () => {
    return axios.request({
        method: 'get',
        url: 'http://localhost:3300/authors',
    })
};

 function* fetchAuthorList() {
    const { data }= yield call (getData);
     console.log(data);
    yield put({
        type: FETCH_AUTHOR_LIST_SUCCESS,
        payload: data,
    })
}

const getDataByName = (name) => {
     console.log(name);
    return axios.request({
        method: 'get',
        url: `http://localhost:3300/authors/${name}`,
    })
};

function* fetchAuthorLiked(value) {
    console.log('fetchAuthorLiked',value.payload);
    const { data }= yield call (getDataByName,value.payload);
    console.log(data);
    yield put({
        type: FETCH_AUTHOR_LIKED_SUCCESS,
        payload: data,
    })
}

const getDataByAuthor = (name) => {
    console.log(name);
    return axios.request({
        method: 'get',
        url: `http://localhost:3300/poems/author/${name}`,
    })
};

function* fetchPoemsByAuthor(value) {
    console.log('fetchPoemsByAuthor',value.payload);
    const { data }= yield call (getDataByAuthor,value.payload);
    console.log(data);
    yield put({
        type: FETCH_POEMS_BY_AUTHOR_SUCCESS,
        payload: data,
    })
}

export function* poemsSaga() {
    yield takeLatest(FETCH_AUTHOR_LIST, fetchAuthorList);
    yield takeLatest(FETCH_AUTHOR_LIKED, fetchAuthorLiked);
    yield takeLatest(FETCH_POEMS_BY_AUTHOR, fetchPoemsByAuthor);
}
