export const SET_PRODUCTS = "SET_PRODUCTS";
export const CHANGE_QUANTITY_PRODUCT = "CHANGE_QUANTITY_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
});

export const changeQuantityProduct = product => ({
    type: CHANGE_QUANTITY_PRODUCT,
    payload: product
});

export const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    payload: id
})