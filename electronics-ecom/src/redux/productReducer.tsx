import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes"


interface InitialStateType{
    product : any[],
    isError:boolean,
    isLoading:boolean
}

const initState : InitialStateType= {
    product: [],
    isError: false,
    isLoading: false,
}

interface ActionOfType {
    type: string,
    payload: any[] 
}

export const reducer = (state = initState, { type, payload }: ActionOfType) => {
    switch (type) {

        case FETCH_REQUEST: {
            return {
                ...state,
                isLoading: true

            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        }

        case FETCH_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}