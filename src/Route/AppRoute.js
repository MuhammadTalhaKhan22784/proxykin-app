import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import About from "../Pages/About/About";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";

const AppRoute = () => {
  return (
    <React.Fragment>
      <Router>
          <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/privacy" component={Privacy}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/faq" component={Faq}></Route>
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
};

export default AppRoute;
