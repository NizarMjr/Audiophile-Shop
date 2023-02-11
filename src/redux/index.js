import { combineReducers } from "redux";
import { reducerAddToCart, reducerGlobalQuantity } from "./reducer";

const reducers = combineReducers({
    cart: reducerAddToCart,
    globalQuantity: reducerGlobalQuantity,
})

export default reducers;