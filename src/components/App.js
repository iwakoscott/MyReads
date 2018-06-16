import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Search from "../pages/Search";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <Route path="/search" component={Search} />
    </Switch>
  </Router>
);
