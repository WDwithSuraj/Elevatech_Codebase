import { ADD_PRODUCT, DECREASE_QUANTITY, DELETE_ITEM, INCREASE_QUANTITY } from "./actionTypes"


interface InitialStateType {
    cartproduct: any[],

}

const initState: InitialStateType = {
    cartproduct: [],

}

interface ActionOfType {
    type: string,
    payload: any,
    id: number,
    quantity: number,
}

export const reducer = (state = initState, { type, payload, id, quantity }: ActionOfType) => {
    switch (type) {

        case ADD_PRODUCT: {
            return {
                ...state,
                cartproduct: state.cartproduct.concat(payload)
            };
        }

        case INCREASE_QUANTITY: {
            let dataafterinccrese = state.cartproduct.map((element, index) => {
                if (element.id === id) {
                    console.log(quantity, "inside fikter")
                    console.log(element.id, "hereid")
                    return { ...element, quantity }
                } else {
                    return element
                }
            })
            console.log(dataafterinccrese, "here")
            return {
                ...state,
                cartproduct: dataafterinccrese
            }
        }

        case DECREASE_QUANTITY: {
            let dataafterdecrease = state.cartproduct.map((element, index) => {
                if (element.id === id) {
                    console.log(quantity, "inside fikter")
                    console.log(element.id, "hereid")
                    return { ...element, quantity }
                } else {
                    return element
                }
            })
            console.log(dataafterdecrease, "here")
            return {
                ...state,
                cartproduct: dataafterdecrease
            }
        }

        case DELETE_ITEM: {
            let filtertered = state.cartproduct.filter((ele) => {
                if (ele.id === id) {
                    return false
                } else {
                    return true
                }
            })

            return {
                ...state,
                cartproduct: filtertered
            }
        }

        default: {
            return state
        }
    }
}