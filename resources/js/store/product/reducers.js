import {
    SET_PRODUCTS,
    CHANGE_QUANTITY_PRODUCT,
    DELETE_PRODUCT,
    CHANGE_HAVE_PRODUCTS
} from "./actions";

const defaultState = {
    haveProducts: true,
    products: []
}

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            };
        }
        case CHANGE_QUANTITY_PRODUCT: {
            const [...products] = state.products;
            products.forEach(product => {
                if (product.id == action.payload.id) {
                    product.quantity = action.payload.quantity;
                    product.total_price = product.quantity * product.price;
                }
            });

            return {
                ...state,
                products: products
            };
        }
        case DELETE_PRODUCT: {
            const [...products] = state.products;
            let index = undefined;
            products.map((product, i) => {
                if(product.id == action.payload) {
                    index = i;
                }
            })
            products.splice(index, 1);

            return {
                haveProducts: Boolean(products.length),
                products: products
            };
        }
        case CHANGE_HAVE_PRODUCTS: {
            return {
                ...state,
                haveProducts: action.payload
            }
        }
        default:
            return state;
    }
};
