import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers/indexReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import  rootSaga  from '../saga/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const rootStore = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default rootStore;
