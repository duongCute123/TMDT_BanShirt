import { combineReducers } from "redux"
import ProductReducer from "./productreducer"
const allReducer = combineReducers({
    product: ProductReducer
})
export default allReducer