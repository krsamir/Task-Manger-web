import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Authentication/Protected";
import Login from "./Components/Login and Register/Login";
import Register from "./Components/Login and Register/Register";
import Tasks from "./Components/Layout/Tasks";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <ProtectedRoute path="/" exact component={Tasks} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
