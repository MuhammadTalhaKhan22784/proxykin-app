import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";

const AppRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/privacy" component={Privacy}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default AppRoute;
