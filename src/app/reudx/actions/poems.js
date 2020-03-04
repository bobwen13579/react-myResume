import { ADD_POEM, ADD_COUNT, FETCH_POEMS } from "../constants/action-types";

function addPoem(title, para) {
    return {
        type: "ADD_POEM",
        payload: {
            title,
            para
        }
    }
}

function addCount(count) {
    return {
        type: "ADD_COUNT",
        payload: count
    }
}

function fetchPoems() {
    return {
        type: "FETCH_POEMS"
    }
}


export {
    addPoem,
    addCount,
    fetchPoems
}
