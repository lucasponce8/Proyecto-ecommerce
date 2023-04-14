import  axios  from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS"

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
    