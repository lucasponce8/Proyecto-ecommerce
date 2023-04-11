const initialState = {
    products: []
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case "GET_PRODUCTS":
        return {
            ...state,
            products: action.payload
        }
        case "FILTER_BY_STATUS":
        const allProducts = state.products
        const statusFiltered = action.payload === "All"? allProducts: allProducts.filter(e => e.status === action.payload)
        return{
            ...state,
            products: statusFiltered
        }
        default:
        return state;        
    }


}

export default rootReducer;