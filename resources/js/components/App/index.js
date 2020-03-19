import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cart from "../Cart";
import Shipping from "../Shipping";
import "./style.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/shipping">
                    <Shipping />
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;
