import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Link } from "react-router-dom";
import UserList from "./users/userList";
import Login from "./users/login";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
        </nav>
      </div>
    );
  }
}

export default withRouter(App);
