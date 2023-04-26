import { FILTER_BY_CATEGORY, GET_CATEGORIES, GET_PRODUCTS, ORDER_BY_PRICE } from "../actions";
const initialState = {
  products: [],
  categories: [],
  products2: []
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        products2: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case FILTER_BY_CATEGORY:
      const allProducts = state.products2
      const statusFiltered = action.payload === "All"? allProducts: allProducts.filter(e => e.category === action.payload)
      return{
        ...state,
        products: statusFiltered,
      }
    case ORDER_BY_PRICE:
      const sortedArr = state.products.sort(function (a, b) {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (action.payload === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
      });
  
      return {
        ...state,
        products: sortedArr
      }

      
    default:
      return state;
  }
}
