import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Components/Users";
import axios from "axios";
import Search from "./Components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state = {
      users: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      axios.get("https://api.github.com/users").then((response) =>
        this.setState({
          users: response.data,
          loading: false,
        })
      );
    }, 1000);
  }

  searchUsers(keyword) {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((response) =>
          this.setState({
            users: response.data.items,
            loading: false,
          })
        );
    }, 1000);
  }

  render() {
    return (
      <>
        <Navbar icon="faCoffee" title="Github Finder" />
        <Search searchUsers={this.searchUsers} />
        <Users users={this.state.users} loading={this.state.loading} />
      </>
    );
  }
}

export default App;
