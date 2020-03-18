import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setProducts } from "../../store/product/actions";
import services from "../../services";
import CartItem from "../CartItem";

import "./style.css";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.totalPrice = this.totalPrice.bind(this);
    }

    async componentWillMount() {
        await services.get("product").then(response => {
            this.props.setProducts(response.data.products);
        });
    }

    totalPrice(products) {
        let result = 0;
        products.map(product => {
            result += product.total_price;
        });
        return result.toFixed(2);
    }

    render() {
        return (
            <div className="container">
                {this.props.products.length ? (
                    this.props.products.map(product => (
                        <CartItem key={product.id} {...product} />
                    ))
                ) : (
                    <CartItem />
                )}
                <div className="cart__bottom">
                    <h2 className="cart__total-price">
                        {this.totalPrice(this.props.products) + " €"}
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

const mapDispatchToProps = {
    setProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
