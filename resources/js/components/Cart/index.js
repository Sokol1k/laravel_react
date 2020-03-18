import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./style.css";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.totalPrice = this.totalPrice.bind(this);
    }

    totalPrice() {
        let result = 0;
        this.props.products.map(product => {
            result += product.price;
        });
        return result.toFixed(2);
    }

    render() {
        return (
            <div className="container">
                <div className="cart__bottom">
                    <h2 className="cart__total-price">
                        {this.totalPrice() + " €"}
                    </h2>
                    <div className="cart__btn-content">
                        <Link className="cart__btn" to="/shipping">
                            Buy
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps)(Cart);
