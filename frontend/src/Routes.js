import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Authentication/Protected";
import Login from "./Components/Login and Register/Login";
import Home from "./Components/Layout/Home";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;