import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Components/Users";


class App extends Component {
  render() {
    return (
      <>
        <Navbar icon="faCoffee" title="Github Finder" />
        <Users />
      </>
    );
  }
}

export default App;
