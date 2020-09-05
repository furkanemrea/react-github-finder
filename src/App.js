import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Components/Users";
import axios from "axios";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      users: [],
      loading: false,
      alert:null,
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
  clearUsers() {
    this.setState({ users: [] });
  }
  setAlert(msg, type) {
    this.setState({alert: {msg,type} });
  }
  
     
    
 
  render() {
    return (
      <>
        <Navbar  title="Github Finder" /> 
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />

        <Users users={this.state.users} loading={this.state.loading} />
      </>
    );
  }
}

export default App;
