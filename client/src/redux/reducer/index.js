import { 
  GET_CATEGORIES, 
  GET_PRODUCTS, 
  GET_PRODUCTS_DETAIL,
  FILTER_BY_CATEGORY,
  ORDER_BY_PRICE,
  GET_PRODUCT_NAME,
  POST_PRODUCT,
  EDIT_PRODUCT,
  SET_LOADING,
  GET_ORDERS,
  POST_ORDER,
  POST_MAIL,
  DELETE_PRODUCT,
} from "../actions";

const initialState = {
  products: [],
  categories: [],
  product: [],
  products2: [],
  isLoading: false,

  orders: [],
}

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
    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        product: action.payload,
      }
    case SET_LOADING:
      return{
        ...state,
        isLoading: action.payload,
      }
    case FILTER_BY_CATEGORY:
      const allProducts = state.products2
      const statusFiltered = action.payload === "All"? allProducts: allProducts.filter(e => e.category === action.payload)
      return{
        ...state,
        products: statusFiltered,
      }
    case GET_PRODUCT_NAME:
      return {
        ...state,
        products: action.payload
      }
    case ORDER_BY_PRICE:
      const sortedArr = [...state.products].sort(function (a, b) {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (action.payload === "asc") {
        return priceA - priceB;
      } else if (action.payload === "desc") {
        return priceB - priceA;
      } 
      });
      return {
        ...state,
        products: sortedArr
      }
    case POST_PRODUCT:
      return {
        ...state, 
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case DELETE_PRODUCT: 
      return {
        ...state,
      }
    case GET_ORDERS:
      return {
        ...state, 
        orders: action.payload
      }
    case POST_ORDER:
      return {
        ...state,
      }
    case POST_MAIL:
      return {
        ...state,
      }  
    default:
      return state;
  }
}
