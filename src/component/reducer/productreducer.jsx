const initStance={

}
const ProductReducer=(state=initStance,action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return state
            break;
    
        default:
            return state
            break;
    }
}
export default ProductReducer