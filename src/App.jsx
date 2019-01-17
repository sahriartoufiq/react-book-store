import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Link } from "react-router-dom";
import UserList from "./users/userList";

import Login from "./users/login";
import {YupTest} from "./users/yup";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users"> User List</Link>
          <Link to="/login"> Login</Link>
          <Link to="/reg">Reg</Link>
          <Link to="/">Home</Link>
          <Link to="/users"> User List</Link>
          <Link to="/login"> Login</Link>
          <Link to="/reg">Reg</Link>
          <Link to="/dummy">Dummy</Link>
        </nav>
        <Route path="/users" component={UserList} />
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={YupTest}/>
      </div>
    );
  }
}

export default withRouter(App);