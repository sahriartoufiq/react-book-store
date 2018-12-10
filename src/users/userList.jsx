import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.getUserList = this.getUserList.bind(this);
  }

  componentDidMount() {
    this.getUserList();
  }

  componentDidUpdate() {
    // this.getUserList();
    console.log('yes');
  }

  componentWillUnmount() {}

  getUserList() {
    const url = "http://localhost:5000/api/users";
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    headers.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmVjMjYwNDgwMTU3YjQzODViY2I4ZWQiLCJ1c2VybmFtZSI6InRvdWZpcSIsInNjb3BlIjpbImFkbWluIiwic3RhZmYiXSwiaWF0IjoxNTQyODY3NjY2fQ.73BcNIzNEPOSqhvNN6QC1EkR-RAmGyAkMfFijEZ3lvg"
    );
    let options = {
      method: "GET"
    };
    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          users: data.users
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.users.map(function(user, index) {
          return <li key={index}>{user.username}</li>;
        })}
      </ul>
    );
  }
}

export default UserList;
