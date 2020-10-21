import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";
import LoginPage from './containers/login-page/container'
import AdminFoodPage from "./containers/admin-food-page/container";
import AdminOrderPage from "./containers/admin-order-page/container";
import HomePage from './containers/home-page/container'
import NavBar from "./shared/components/NavBar";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/admin/order-page" component={AdminOrderPage} />
          <Route exact path="/admin/food-page" component={AdminFoodPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}
render(<Navigation />, document.getElementById("root"));
