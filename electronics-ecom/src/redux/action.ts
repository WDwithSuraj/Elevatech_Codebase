import { ADD_PRODUCT, CART_TOTAL, DECREASE_QUANTITY, DELETE_ITEM, FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, INCREASE_QUANTITY } from "./actionTypes"

const fetchRequestAction = () => {
    return { type: FETCH_REQUEST }
}

const fetchSuccessAction = (payload: any[]) => {
    return { type: FETCH_SUCCESS, payload }
}

const fetcFailureAction = () => {
    return { type: FETCH_FAILURE }
}

const addproductaction = (payload: any) => {
    return { type: ADD_PRODUCT, payload }
}


const incresequantityaction = (id: number, quantity: number) => {
    console.log(quantity, "here action")
    return { type: INCREASE_QUANTITY, id, quantity }
}

const decreasequantityaction = (id: number, quantity: number) => {
    return { type: DECREASE_QUANTITY , id, quantity}
}

const deleteaction =(id:number)=>{
    return { type: DELETE_ITEM , id}
}


const getCartTotal = (payload : number) => {
    return {type : CART_TOTAL, payload }
}
export { fetchRequestAction, fetchSuccessAction, fetcFailureAction, addproductaction, incresequantityaction, decreasequantityaction ,deleteaction, getCartTotal}