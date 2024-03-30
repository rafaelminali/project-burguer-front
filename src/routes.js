import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import RowRequests from "./containers/RowRequests";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedidos" component={RowRequests} />
      </Switch>
    </Router>
  );
}

export default Routes;
