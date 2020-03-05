// 处理action
import { ADD_COUNT, FETCH_AUTHOR_LIST_SUCCESS, FETCH_AUTHOR_LIKED_SUCCESS,
    CHOOSE_AUTHOR,FETCH_POEMS_BY_AUTHOR_SUCCESS
} from "../constants/action-types";

const initialState = {
    authorList: [
        {
            title: '123123',
            para: []
        },
    ],
    author: {
        name: '',
        des: ''
    },
    poemList:[],
    count: 1,
};

const poems = function(state= initialState, action) {
    switch (action.type) {
        case ADD_COUNT: {
            return {
                ...state,
                count: action.payload
            }
        }

        case FETCH_AUTHOR_LIST_SUCCESS: {
            console.log(action);
            return {
                ...state,
                authorList: action.payload
            }
        }
        case FETCH_AUTHOR_LIKED_SUCCESS: {
            console.log(action, 'poems get');
            return {
                ...state,
                authorList: action.payload
            }
        }

        case CHOOSE_AUTHOR: {
            return {
                ...state,
                author: action.payload
            }
        }

        case FETCH_POEMS_BY_AUTHOR_SUCCESS: {
            return {
                ...state,
                poemList: action.payload
            }
        }
        default:
            return state;
    }
};

export default poems;
