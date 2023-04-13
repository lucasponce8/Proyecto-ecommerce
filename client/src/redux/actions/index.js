import  axios  from "axios";

export function getProducts(){
    return async function(dispatch){
        var json = await axios.get("http://localhost3001/products",{

        });
        return dispatch({
            type: "GET_PRODUCTS", 
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
    