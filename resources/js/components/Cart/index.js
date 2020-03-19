import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setProducts, changeHaveProducts } from "../../store/product/actions";
import services from "../../services";
import ShowCartItem from "../../elements/ShowCartItem";

import "./style.css";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.totalPrice = this.totalPrice.bind(this);
    }

    async componentWillMount() {
        await services.get("product").then(response => {
            if (response.data.products) {
                this.props.setProducts(response.data.products);
            } else {
                this.props.changeHaveProducts(false);
            }
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
                <ShowCartItem
                    haveProducts={this.props.haveProducts}
                    products={this.props.products}
                />
                <div className="cart__bottom">
                    <h2 className="cart__total-price">
                        {this.totalPrice(this.props.products) + " €"}
                    </h2>
                    <div className="cart__btn-content">
                        {this.props.haveProducts ? (
                            <Link className="cart__btn" to="/shipping">
                                Buy
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        haveProducts: state.products.haveProducts,
        products: state.products.products
    };
};

const mapDispatchToProps = {
    setProducts,
    changeHaveProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
