import React from "react";
import CartItem from "../../components/CartItem";

import './style.css'

function ShowCartItem(props) {
    if (props.haveProducts) {
        if (props.products.length) {
            return props.products.map(product => (
                <CartItem key={product.id} {...product} />
            ));
        } else {
            return <CartItem />;
        }
    } else {
        return <h1 className='cart_no-product'>No products</h1>;
    }
}

export default ShowCartItem;