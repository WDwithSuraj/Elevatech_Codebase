import { combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productReducer";
import { reducer as cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    productReducer,
    cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);