import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
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
            shipping_options: "Free shipping"
        };
        this.validator = new SimpleReactValidator();
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validator.allValid()) {
            let data = {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone || null,
                email: this.state.email || null,
                shipping_options: this.state.shipping_options
            };
            services.post("shipping", data).then(response => {
                alert('Order is processed!')
            });
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChangeForm}
                        ></input>
                        {this.validator.message(
                            "name",
                            this.state.name,
                            "required|max:255"
                        )}
                    </div>
                    <div>
                        <label htmlFor="address">Address*</label>
                        <input
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChangeForm}
                        ></input>
                        {this.validator.message(
                            "address",
                            this.state.address,
                            "required|max:150"
                        )}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChangeForm}
                        ></input>
                        {this.validator.message(
                            "phone",
                            this.state.phone,
                            "max:17"
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChangeForm}
                        ></input>
                        {this.validator.message(
                            "email",
                            this.state.email,
                            "email|max:255"
                        )}
                    </div>
                    <div>
                        <label htmlFor="shipping_options">
                            Shipping options
                        </label>
                        <select
                            name="shipping_options"
                            value={this.state.shipping_options}
                            onChange={this.handleChangeForm}
                        >
                            <option value="Free shipping">Free shipping</option>
                            <option value="Express shipping">
                                Express shipping- additional 9.99 €
                            </option>
                            <option value="Courier shipping">
                                Courier shipping - additional 19.99 €
                            </option>
                        </select>
                    </div>
                    <input type="submit" value="PAY" />
                </form>
            </div>
        );
    }
}

export default Shipping;
