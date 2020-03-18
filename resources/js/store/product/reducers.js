import { SET_PRODUCTS, CHANGE_QUANTITY_PRODUCT } from "./actions";

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload;
        case CHANGE_QUANTITY_PRODUCT:
            const [...products] = state;
            products.forEach(product => {
                if (product.id == action.payload.id) {
                    product.quantity = action.payload.quantity;
                    product.total_price = product.quantity * product.price;
                }
            });
            return products;
        default:
            return state;
    }
};
