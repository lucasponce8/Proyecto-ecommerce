import  axios  from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES"; 
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";

export function getProducts(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/products",{

        });
        return dispatch({
            type: GET_PRODUCTS, 
            payload: json.data,

        })
    }
}

export function filterProductsByStatus(payload){
    return {
        type: "FILTER_BY_STATUS",
        payload,
    }
}

export const getFilterCategories = () => {
    return async function(dispatch) {
        let data = await axios.get("http://localhost:3001/categories");

        return dispatch({
            type: GET_CATEGORIES,
            payload: data.data
        })
    }
}

export const getProductsById = (id) => {
    return async function(dispatch) {
        let data = await axios.get(`http://localhost:3001/product/${id}`);

        return dispatch({
            type: GET_PRODUCTS_DETAIL,
            payload: data.data
        })
    }
}