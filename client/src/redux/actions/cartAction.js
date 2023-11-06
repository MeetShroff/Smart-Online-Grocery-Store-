import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

export const addtocart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    console.log("Error while calling cart API");
  }
};
export const deletefromcart = (id) => async (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
};
