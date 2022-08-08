import React from "react";

import Basket from "./basket/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Homepage.css";
import Home from "./Home/Home";
const Homepage = () => {
  return (
    <div className="page">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </Router>
    </div>
  );
};

export default Homepage;
