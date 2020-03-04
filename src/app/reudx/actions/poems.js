import { ADD_POEM } from "../constants/action-types";

function addPoem(title, para) {
    return {
        type: "ADD_POEM",
        payload: {
            title,
            para
        }
    }
}

export {
    addPoem
}
