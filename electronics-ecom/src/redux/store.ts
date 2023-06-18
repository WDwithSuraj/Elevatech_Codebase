import { combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productReducer";
import { reducer as cartReducer } from "./cartReducer";
import { reducer as authReducer } from "./authReducer";
const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);