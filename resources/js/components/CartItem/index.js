import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import "./style.css";

class CartItem extends Component {
    render() {
        const { id, title, description, quantity, price } = this.props;
        return (
            <div className="cart-item">
                <div className="cart-item__left">
                    <div>
                        <img
                            className="cart-item__image"
                            src="/img/default.jpg"
                            alt="Image"
                        ></img>
                    </div>
                    <div className="cart-item__content">
                        <h3>{title}</h3>
                        <div className="cart-item__description">
                            {description}
                        </div>
                    </div>
                </div>
                <div className="cart-item__right">
                    <div className="cart-item__trash-content">
                        <FaTrashAlt className="cart-item__trash" />
                    </div>
                    <div className="cart-item__price-content">
                        <div className="cart-item__quantity">
                            <button onClick={this.handleQuantityDecrement}>
                                -
                            </button>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={quantity}
                                onChange={this.handleQuantityChange}
                            />
                            <button onClick={this.handleQuantityIncrement}>
                                +
                            </button>
                        </div>
                        <h3>{price.toFixed(2) + " €"}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
