import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { changeQuantityProduct } from "../../store/product/actions";
import { connect } from "react-redux";
import "./style.css";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleQuantityIncrement = this.handleQuantityIncrement.bind(this);
        this.handleQuantityDecrement = this.handleQuantityDecrement.bind(this);
    }

    handleQuantityChange(event) {
        const target = event.target;
        let value = undefined;
        if (target.value < 1) {
            value = 1;
        } else if (target.value > 50) {
            value = 50;
        } else {
            value = target.value;
        }
        this.props.changeQuantityProduct({
            id: this.props.id,
            quantity: value
        });
    }

    handleQuantityIncrement() {
        if (this.props.quantity >= 1 && this.props.quantity < 50) {
            this.props.changeQuantityProduct({
                id: this.props.id,
                quantity: this.props.quantity + 1
            });
        }
    }

    handleQuantityDecrement() {
        if (this.props.quantity > 1 && this.props.quantity <= 50) {
            this.props.changeQuantityProduct({
                id: this.props.id,
                quantity: this.props.quantity - 1
            });
        }
    }

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
                        <h3>{(quantity * price).toFixed(2) + " €"}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    changeQuantityProduct
};

export default connect(null, mapDispatchToProps)(CartItem);
