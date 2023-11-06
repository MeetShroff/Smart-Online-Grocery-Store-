import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE,GET_PRODUCTS_DETAILS, GET_PRODUCTS_DETAILS_SUCCESS, GET_PRODUCTS_DETAILS_FAILURE} from '../constants/productConstant';


export const getProductsReducer =(state = {products: []}, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {products: action.payload} ;
        case GET_PRODUCTS_FAILURE:
            return {error: action.payload} ;
        default:
            return state;
    }
}

export const getProductDetailsReducer =(state = {product: {}}, action) => {
    switch (action.type) {
        case GET_PRODUCTS_DETAILS:
            return {product: {}, loading: true} ;
        case GET_PRODUCTS_DETAILS_SUCCESS:
            return {product: action.payload, loading: false} ;
        case GET_PRODUCTS_DETAILS_FAILURE:
            return {error: action.payload, loading: false} ;
        default:
            return state;
    }
}