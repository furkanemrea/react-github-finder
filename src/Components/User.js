import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "48159905",
      name: "Furkan Emre ALTINTAŞ",
      login: "furkanemrea",
      avatar_url: "https://avatars3.githubusercontent.com/u/48159905?v=4",
      html_url: "https://github.com/furkanemrea",
      followers: "2",
      blog: "null",
    };
  }
  render() {
    const { name, avatar_url, followers, login, html_url } = this.props.user;
    return (
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-2">
            <img src={avatar_url} alt="" className="img-fluid"></img>
            <div className="card-body">
              <h5 className="card-title">{login}</h5>
              <a href={html_url} className="btn btn-primary btn-sm">
                Go Profile
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default User;
