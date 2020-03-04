// 处理action
import { ADD_POEM, ADD_COUNT, FETCHPOEMSUCCESS } from "../constants/action-types";

const initialState = {
    poems: [
        {
            title: '123123',
            para: []
        },
    ],
    count: 1,
};

const poems = function(state= initialState, action) {
    switch (action.type) {
        case ADD_POEM: {
            console.log(action.payload);
            return {
                ...state,
                poems: [...state.poems, action.payload]
            }
        }

        case ADD_COUNT: {
            // 直接修改state是错误的用法
            // 用Object.assign()进行拷贝
            //state.poems.count = action.payload;
            console.log('action get');
            return {
                ...state,
                count: action.payload
            }
        }

        case FETCHPOEMSUCCESS: {
            console.log(action, 'poems get');
            return {
                ...state,
                poems: action.poems
            }
        }

        default:
            return state;
    }
};

export default poems;
