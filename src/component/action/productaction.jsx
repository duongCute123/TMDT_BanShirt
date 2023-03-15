const getprocduct = (product) => {
    return {
        type: "GET_PRODUCT",
        payload: product
    }
}
const addproduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
const deteproduct = (product) => {
    return {
        type: "DELETE_PRODUCT",
        payload: product
    }
}
const updateProduct = (product) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: product
    }
}
const timkiem = (product) => {
    return {
        type: "SEACH_PRODUCT",
        payload: product
    }
}
export {addproduct,getprocduct,deteproduct,updateProduct,timkiem}