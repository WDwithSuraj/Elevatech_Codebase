import { combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productReducer";

const rootReducer = combineReducers({
    productReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);