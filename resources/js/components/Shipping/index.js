import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import MaskedInput from "react-text-mask";
import services from "../../services";

import "./style.css";

class Shipping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone: "",
            email: "",
            shipping_options: "Free shipping",
            disabled: false
        };
        this.validator = new SimpleReactValidator();
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        if (this.validator.allValid()) {
            this.setState({
                disabled: false
            });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.validator.allValid()) {
            let data = {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone || null,
                email: this.state.email || null,
                shipping_options: this.state.shipping_options
            };
            await services.post("shipping", data).then(response => {
                alert("Order is processed!");
                this.setState({
                    name: "",
                    address: "",
                    phone: "",
                    email: "",
                    shipping_options: "Free shipping"
                });
            });
        } else {
            this.validator.showMessages();
            this.forceUpdate();
            this.setState({
                disabled: true
            });
        }
    }

    render() {
        return (
            <div className="container">
                <form className="shipping-form" onSubmit={this.handleSubmit}>
                    <div className="shipping-form-group">
                        <label htmlFor="name">Name*</label>
                        <div>
                            <input
                                type="text"
                                name="name"
                                className="shipping-input"
                                value={this.state.name}
                                onChange={this.handleChangeForm}
                            ></input>
                            <small className="shipping-error">
                                {this.validator.message(
                                    "name",
                                    this.state.name,
                                    "required|max:255"
                                )}
                            </small>
                        </div>
                    </div>
                    <div className="shipping-form-group">
                        <label htmlFor="address">Address*</label>
                        <div>
                            <input
                                type="text"
                                name="address"
                                className="shipping-input"
                                value={this.state.address}
                                onChange={this.handleChangeForm}
                            ></input>
                            <small className="shipping-error">
                                {this.validator.message(
                                    "address",
                                    this.state.address,
                                    "required|max:150"
                                )}
                            </small>
                        </div>
                    </div>
                    <div className="shipping-form-group">
                        <label htmlFor="phone">Phone</label>
                        <div>
                            <MaskedInput
                                name="phone"
                                className="shipping-input"
                                mask={[
                                    "+",
                                    "3",
                                    "8",
                                    "(",
                                    /[0-9]/,
                                    /\d/,
                                    /\d/,
                                    ")",
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    "-",
                                    /\d/,
                                    /\d/,
                                    "-",
                                    /\d/,
                                    /\d/
                                ]}
                                placeholder="+38"
                                value={this.state.phone}
                                onChange={this.handleChangeForm}
                            ></MaskedInput>
                            <small className="shipping-error">
                                {this.validator.message(
                                    "phone",
                                    this.state.phone,
                                    "max:17"
                                )}
                            </small>
                        </div>
                    </div>
                    <div className="shipping-form-group">
                        <label htmlFor="email">Email</label>
                        <div>
                            <input
                                type="text"
                                name="email"
                                className="shipping-input"
                                value={this.state.email}
                                onChange={this.handleChangeForm}
                            ></input>
                            <small className="shipping-error">
                                {this.validator.message(
                                    "email",
                                    this.state.email,
                                    "email|max:255"
                                )}
                            </small>
                        </div>
                    </div>
                    <div className="shipping-form-group">
                        <label htmlFor="shipping_options">
                            Shipping options
                        </label>
                        <div>
                            <select
                                name="shipping_options"
                                className="shipping-select"
                                value={this.state.shipping_options}
                                onChange={this.handleChangeForm}
                            >
                                <option value="Free shipping">
                                    Free shipping
                                </option>
                                <option value="Express shipping">
                                    Express shipping- additional 9.99 €
                                </option>
                                <option value="Courier shipping">
                                    Courier shipping - additional 19.99 €
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="shipping-btn__content">
                        <input
                            className="shipping-btn"
                            type="submit"
                            value="PAY"
                            disabled={this.state.disabled}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Shipping;