import { combineReducers } from 'redux';
import poems from './poemReducers';


const allReducers = {
    poems: poems,
};

const rootReducer = combineReducers(allReducers);


export default rootReducer;
