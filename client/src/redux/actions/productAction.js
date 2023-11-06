import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_DETAILS, GET_PRODUCTS_DETAILS_SUCCESS, GET_PRODUCTS_DETAILS_FAILURE} from '../constants/productConstant';
import axios from "axios";
const URL = "http://localhost:8000";


export const getProducts =() => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/products`);
        // console.log("response",response);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message })
    }
}

export const getProductDetails =(id) => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_DETAILS })
        const {data} = await axios.get(`${URL}/product/${id}`);
        // console.log("response",response);
        dispatch({ type: GET_PRODUCTS_DETAILS_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_DETAILS_FAILURE, payload: error.message })
    }
}