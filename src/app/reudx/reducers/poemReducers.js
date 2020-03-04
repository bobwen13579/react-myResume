// 处理action
import { ADD_POEM, ADD_COUNT } from "../constants/action-types";

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
            state.poems.count = action.payload;
            return {
                ...state
            }
        }

        default:
            return state;
    }
};

export default poems;
