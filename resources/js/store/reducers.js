import { combineReducers } from "redux";
import { productsReducer } from "./product/reducers";

export default combineReducers({
    products: productsReducer
});
