import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './container/Login/loginpage'
import "./index.css";
import Index from "./container/food/index";
import Mainpage from "./container/mainpage/Mainpage";
import NavBar from "./shared/components/NavBar";
import "./style.scss";

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
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/Mainpage" component={Mainpage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/App" component={Index} />
        </Switch>
      </Router>
    );
  }
}
render(<Navigation />, document.getElementById("root"));
