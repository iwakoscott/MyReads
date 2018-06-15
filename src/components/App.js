import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Search from "../pages/Search";

// getAll().then(results => {
//   const myBook = results[0];
//   console.log(myBook["shelf"]);
//   update(myBook, "read").then(result => console.log(result));
// });

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <Route path="/search" component={Search} />
    </Switch>
  </Router>
);
