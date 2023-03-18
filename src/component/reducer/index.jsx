import { combineReducers } from "redux"
import ShopingCart from "./cart"
import ProductReducer from "./productreducer"
const allReducer = combineReducers({
    product: ProductReducer,
    shoping:ShopingCart
})
export default allReducer