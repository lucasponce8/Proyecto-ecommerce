import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_PRODUCT_NAME = "GET_PRODUCT_NAME";
export const POST_PRODUCT = "POST_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const SET_LOADING = "SET_LOADING";

export const GET_ORDERS = "GET_ORDERS";
export const POST_ORDER = "POST_ORDER";

export const POST_MAIL = "POST_MAIL";


export function getProducts() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
      dispatch({ 
        type: SET_LOADING, 
        payload: true 
      });
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
}


export const getProductDetail = (id) => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`http://localhost:3001/product/${id}`);
      console.log(data)
      return dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: data,
      })
    } catch (error) {
      return dispatch ({
          type: GET_PRODUCTS_DETAIL,
          payload: []
      });
  };

  }
}


export const postProduct = (payload) => {
  return async function() {
    const data = await axios.post("http://localhost:3001/product", payload);

    return data;
  }
}


export const editProduct = (id, payload) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`http://localhost:3001/product/${id}`, payload);
      return dispatch ({
        type: EDIT_PRODUCT,
        payload: data
      }) 
    } catch (error) {
      console.log(error);
    }
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

// ORDERS

export const getOrders = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/orders");
      dispatch({
        type: GET_ORDERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const postOrder = (payload) => {
  return async function() {
    const data = await axios.post("http://localhost:3001/order", payload);

    return data;
  }
}

// MAIL
export const postEmail = (payload) => {
  return async function () {
    const data = await axios.post("http://localhost:3001/mails", payload);
    return data;
  }
}