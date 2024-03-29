const initStance = {
    numberCart: 0,
    Cart:[]
}
const ShopingCart = (state = initStance, action) => {
    switch (action.type) {
        case "ADD_SHOPING_CARD":
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    tenSpham: action.payload.tenSpham,
                    anh: action.payload.anh,
                    giaSpham: action.payload.giaSpham
                }
                
                
                state.Cart.push(cart)
                
            }
            else {
                let check = false;
                state.Cart.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.Cart[key].quantity++
                        check = true
                    }
                })
                if (!check) {
                    let cart = {
                        id: action.payload.id,
                        quantity: 1,
                        tenSpham: action.payload.tenSpham,
                        anh: action.payload.anh,
                        giaSpham: action.payload.giaSpham
                    }
                    state.Cart.push(cart)
                }
            }
            localStorage.setItem("items",JSON.stringify(state.Cart))
            console.log(state.Cart);
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
            break;
        case "INCREASE_QUANTITY":
            state.numberCart++
            state.Cart[action.payload].quantity++
            return {
                ...state
            }
        case "DECREASE_QUANTITY":
            let quantity = state.Cart[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Cart[action.payload].quantity--;
            }

            return {
                ...state
            }

        case "DELETE_CART":
            let quantity_ = state.Cart[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Cart.filter(item => {
                    return item.id != state.Cart[action.payload].id
                })

            }
            break
        default:
            return state
            break;
    }
}
export default ShopingCart