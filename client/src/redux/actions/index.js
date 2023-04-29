import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_PRODUCT_NAME = "GET_PRODUCT_NAME";
export const POST_PRODUCT = "POST_PRODUCT";

export function getProducts() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/products", {});
    return dispatch({
      type: GET_PRODUCTS,
      payload: json.data,
    });
  };
}

export const postProduct = (payload) => {
  return async function(dispatch) {
    const data = await axios.post("http://localhost:3001/products", payload);

    return data;
  }
}

export function filterProductsByCategory(payload) {
  return {
    type: FILTER_BY_CATEGORY,
    payload,
  };
}

export const getFilterCategories = () => {
  return async function (dispatch) {
    let data = await axios.get("http://localhost:3001/categories");

    return dispatch({
      type: GET_CATEGORIES,
      payload: data.data,
    });
  };
};

export const getProductsById = (id) => {
  return async function (dispatch) {
    let data = await axios.get(`http://localhost:3001/product/${id}`);

    return dispatch({
      type: GET_PRODUCTS_DETAIL,
      payload: data.data,
    });
  };
};

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

export const getNameProduct = (name) => {
  return async function (dispatch) {
    try {
        const { data } = await axios.get(`http://localhost:3001/product?name=${name}`);
        console.log(data)
      return dispatch({
        type: GET_PRODUCT_NAME,
        payload: data,
      });
    } catch (error) {
        console.log(error)
      return dispatch({
        type: GET_PRODUCT_NAME,
        payload: [],
      });
    }
  };
};
