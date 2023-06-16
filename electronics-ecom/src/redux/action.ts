import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes"

const fetchRequestAction = () => {
    return { type: FETCH_REQUEST }
}

const fetchSuccessAction = (payload :any[]) => {
    return { type: FETCH_SUCCESS ,payload}
}

const fetcFailureAction = () => {
    return { type: FETCH_FAILURE }
}

export { fetchRequestAction, fetchSuccessAction, fetcFailureAction }