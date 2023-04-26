import { 
  GET_CATEGORIES, 
  GET_PRODUCTS, 
  GET_PRODUCTS_DETAIL 
} from "../actions";

const initialState = {
  products: [],
  categories: [],
  product: []
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        product: action.payload
      }
    // case "FILTER_BY_STATUS":
    // const allProducts = state.products
    // const statusFiltered = action.payload === "All"? allProducts: allProducts.filter(e => e.status === action.payload)
    // return{
    //     ...state,
    //     products: statusFiltered
    // }
    default:
      return state;
  }
}
