import axios from "axios";
const initStance = {
    Product: []
}
const ProductReducer = (state = initStance, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return state
            break;
        case "GET_PRODUCT":
            axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
                .then(res => {
                    state.Product.push(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
            return {
                ...state
            }
        case "SEACH_PRODUCT":
            axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
                .then(res => {
                    state.Product.push(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
                state.Product.filter(list=>list.tenSpham.toLowerCase().includes(action.payload)).map((list)=>(
                    state.Product.push(list)
                ))
                console.log(state.Product);
            return {
                ...state
            }
        default:
            return state
            break;
    }
}
export default ProductReducer