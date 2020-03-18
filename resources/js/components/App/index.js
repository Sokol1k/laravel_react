import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cart from "../Cart";
import "./style.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/shipping">
                    <div>shipping</div>
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;
