import { USER_LOGIN, USER_LOGOUT } from "./actionTypes";

interface AuthType {
    isAuth : boolean
}

const initialState : AuthType = {
    isAuth : false
}

interface ActionOfType {
    type: string,
}

export const reducer = (state = initialState, {type} : ActionOfType) => {
    switch(type){

        case USER_LOGIN : {
            return {
                ...state,
                isAuth : true
            }
        }

        case USER_LOGOUT : {
            return {
                ...state,
                isAuth : false
            }
        }
        default : return state;
    }

}