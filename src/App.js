import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Admin from "./pages/admin";

import Login from "./pages/login";
import ProductAdd from "./pages/productAdd";
import "./App.css";
import EditProduct from "./pages/editProduct";
import Navbar from "./navbar";
import Customers from "./pages/customers";
import About from "./pages/about";

class App extends Component {
  componentDidMount() {
    if (!localStorage.getItem("items")) {
      localStorage.setItem("items", JSON.stringify([]));
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {(localStorage.getItem("auth") && <Redirect to="/product" />) || (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/product">
            <Admin />
          </Route>

          <Route exact path="/product/add">
            <ProductAdd />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/product/edit/:id">
            <EditProduct />
          </Route>

          <Route exact path="/customers">
            <Customers />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
