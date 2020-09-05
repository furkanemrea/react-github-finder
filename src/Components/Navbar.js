import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCode } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a href="#" className="navbar-brand">
        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>{"     "}{this.props.title}
        </a>
      </nav>
    );
  }
}

Navbar.defaultProps={
    title:"Github FEA"
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
export default Navbar;
