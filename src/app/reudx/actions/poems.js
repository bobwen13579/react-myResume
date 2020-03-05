import { ADD_COUNT, FETCH_AUTHOR_LIKED, CHOOSE_AUTHOR,FETCH_POEMS_BY_AUTHOR, FETCH_AUTHOR_LIST
} from "../constants/action-types";


function addCount(count) {
    return {
        type: ADD_COUNT,
        payload: count
    }
}

function chooseAuthors(name,describe) {
    return {
        type: CHOOSE_AUTHOR,
        payload: { name, describe }
    }
}

function fetchAuthorList() {
    return {
        type: FETCH_AUTHOR_LIST
    }
}


function fetchAuthorLiked(value) {
    console.log(value);
    return {
        type: FETCH_AUTHOR_LIKED,
        payload: value
    }
}

function fetchPoemsByAuthor(author) {
    return {
        type: FETCH_POEMS_BY_AUTHOR,
        payload: author
    }
}

export {
    addCount,
    fetchAuthorList,
    fetchAuthorLiked,
    chooseAuthors,
    fetchPoemsByAuthor
}
