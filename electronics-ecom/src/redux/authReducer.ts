import { USER_LOGIN, USER_LOGOUT } from "./actionTypes";

interface AuthType {
    isAuth : false
}

const initialState : AuthType = {
    isAuth : false
}

interface ActionOfType {
    type: string,
    payload: any[] 
}

export const reducer = (state = initialState, {type, payload} : ActionOfType) => {
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